import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { AuthForm } from '../../components/auth/AuthForm';
import { InputField } from '../../components/auth/InputField';

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive password reset instructions"
    >
      <AuthForm onSubmit={handleSubmit}>
        <InputField
          icon={Mail}
          type="email"
          placeholder="Email address"
          name="email"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Send Reset Link
        </button>

        <div className="mt-6 space-y-2 text-center">
          <p className="text-gray-400">
            Remember your password?{' '}
            <Link to="/auth/login" className="text-purple-400 hover:text-purple-300">
              Back to login
            </Link>
          </p>
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-purple-400 hover:text-purple-300">
              Sign up
            </Link>
          </p>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}