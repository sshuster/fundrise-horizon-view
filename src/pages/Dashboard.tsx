
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import StartupDashboard from '@/components/dashboard/StartupDashboard';
import InvestorDashboard from '@/components/dashboard/InvestorDashboard';

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  // Redirect if not logged in
  if (!isLoading && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">
          {user?.role === 'startup' ? 'Startup Dashboard' : 'Investor Dashboard'}
        </p>
      </div>
      
      {user?.role === 'startup' ? <StartupDashboard /> : <InvestorDashboard />}
    </Layout>
  );
};

export default Dashboard;
