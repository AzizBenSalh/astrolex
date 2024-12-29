import { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { AuthForm } from '../../components/auth/AuthForm';
import { InputField } from '../../components/auth/InputField';
import axios from 'axios';  // Import axios pour les requêtes HTTP
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  // État pour gérer les valeurs des champs de formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  // Gestionnaire d'événements pour les champs de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone, password, confirmPassword } = formData;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    const userData = { name, email, password, confirmPassword, phone };
  
    console.log('Payload:', userData);
  
    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', userData, {
        headers: { 'Content-Type': 'application/json' }
      });
      const { data } = response;
      console.log('Response data:', data);
  
      if (data.message === "Utilisateur créé avec succès.") {  // Vérification de la réponse message
        alert('Account created successfully!');
        navigate('/auth/login');  // Redirection vers la page d'accueil
      } else {
        alert('Error: ' + data.message);  // Afficher un message d'erreur si nécessaire
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Error during registration');
    }
  };
  
  
  

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join us to explore the wonders of space"
    >
      <AuthForm onSubmit={handleSubmit}>
        <InputField
          icon={User}
          type="text"
          placeholder="Full name"
          name="name"
          value={formData.name} // Passer la valeur de l'état
          onChange={handleInputChange} // Passer le gestionnaire de changement
        />
        <InputField
          icon={Mail}
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email} // Passer la valeur de l'état
          onChange={handleInputChange} // Passer le gestionnaire de changement
        />
        <InputField
          icon={Phone}
          type="tel"
          placeholder="Phone number"
          name="phone"
          value={formData.phone} // Passer la valeur de l'état
          onChange={handleInputChange} // Passer le gestionnaire de changement
        />
        <InputField
          icon={Lock}
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password} // Passer la valeur de l'état
          onChange={handleInputChange} // Passer le gestionnaire de changement
        />
        <InputField
          icon={Lock}
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword} // Passer la valeur de l'état
          onChange={handleInputChange} // Passer le gestionnaire de changement
        />

        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2 text-sm text-gray-300">
              I agree to the{' '}
              <Link to="/terms" className="text-purple-400 hover:text-purple-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-purple-400 hover:text-purple-300">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </p>
      </AuthForm>
    </AuthLayout>
  );
}
