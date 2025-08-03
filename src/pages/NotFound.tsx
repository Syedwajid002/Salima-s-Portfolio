import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;