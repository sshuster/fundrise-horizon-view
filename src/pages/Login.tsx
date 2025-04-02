
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';
import { DollarSign } from 'lucide-react';

const Login = () => {
  const { user } = useAuth();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center py-12">
        <div className="flex items-center mb-8">
          <DollarSign className="h-10 w-10 text-gold-400" />
          <h1 className="text-3xl font-bold ml-2">FundRise Horizon</h1>
        </div>
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
