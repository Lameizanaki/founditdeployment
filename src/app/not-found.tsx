import React from 'react';
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <p className="text-9xl font-bold text-teal-600 mb-2">
          404
        </p>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
        
        {/* Page Not Found Text */}
        <p className="text-2xl font-semibold text-gray-900 mb-4">
          Page not found
        </p>
        
        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <p className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors hover:cursor-pointer active:scale-95">
            <ArrowLeft size={18} />
            Go Back
          </p>

          <p className="flex items-center gap-2 px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors hover:cursor-pointer active:scale-95">
            <Home size={18} />
            Home
          </p>
          
          <p className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors hover:cursor-pointer active:scale-95">
            <Search size={18} />
            Search
          </p>
        </div>
        
        {/* Popular Pages */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="!text-teal-600 hover:text-teal-700 !no-underline">
              Find Talent
            </a>
            <a href="##" className="!text-teal-600 hover:text-teal-700 !no-underline">
              Browse Jobs
            </a>
            <a href="##" className="!text-teal-600 hover:text-teal-700 !no-underline">
              Shop
            </a>
            <a href="#" className="!text-teal-600 hover:text-teal-700 !no-underline">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;