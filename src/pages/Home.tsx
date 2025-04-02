
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-navy-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <DollarSign className="h-6 w-6 text-gold-400" />
            <span className="text-xl font-bold ml-2">FundRise Horizon</span>
          </div>
          <div className="space-x-4">
            {user ? (
              <Button asChild>
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-navy-800" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Connecting Startups with Venture Capital</h1>
            <p className="text-xl text-gray-300 mb-8">
              FundRise Horizon simplifies the fundraising process by providing a platform where startups can connect with investors and track their fundraising progress.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-teal-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Fundraising</h3>
              <p className="text-gray-600">
                Keep track of your fundraising progress, investor interactions, and meeting schedules.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-gold-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect with Investors</h3>
              <p className="text-gray-600">
                Build relationships with venture capital firms and track your interactions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-navy-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Data</h3>
              <p className="text-gray-600">
                Your fundraising data is kept secure and only shared with investors you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your fundraising journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join FundRise Horizon today and connect with investors who can help take your startup to the next level.
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
            <Link to="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <DollarSign className="h-6 w-6 text-gold-400" />
              <span className="text-xl font-bold ml-2">FundRise Horizon</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} FundRise Horizon. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
