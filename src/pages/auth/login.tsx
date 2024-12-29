import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { AuthForm } from '../../components/auth/AuthForm';
import { InputField } from '../../components/auth/InputField';
import axios from 'axios';
import { useAuthStore } from '../../store/useAuthStore';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Validation de base
      if (!formData.email || !formData.password) {
        setErrorMessage('Email and password are required.');
        return;
      }
  
      // Envoi de la requête
      const response = await axios.post(
        'http://localhost:3000/api/users/login',
        {
          email: formData.email,
          password: formData.password
        },
        {
          headers: {
            'Content-Type': 'application/json' // S'assurer du type JSON
          }
        }
      );
  
      const { data } = response;
  
      // Vérification du message dans la réponse pour déterminer si la connexion est réussie
      if (data.message === 'Connexion réussie.') {
        // Sauvegarder le token dans localStorage
        localStorage.setItem('token', data.token);
  
        // Sauvegarder les données utilisateur (par exemple, id, nom, email)
        const user = data.user;
        login(user);
  
        // Rediriger vers la page d'accueil après connexion réussie
        navigate('/');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      // Gérer les erreurs de connexion
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message); // Message d'erreur spécifique
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    }
  };
  
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to access your account"
    >
      <AuthForm onSubmit={handleSubmit}>
        <InputField
          icon={Mail}
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <InputField
          icon={Lock}
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Sign in
        </button>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/auth/signup" className="text-purple-400 hover:text-purple-300">
            Sign up
          </Link>
        </p>
      </AuthForm>
    </AuthLayout>
  );
}
