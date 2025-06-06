import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">habit track</Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="hover:text-white/80">Home</Link>
              <Link to="/about" className="hover:text-white/80">About</Link>
              <Link to="/features" className="hover:text-white/80">Features</Link>
              <Link to="/contact" className="hover:text-white/80">Contact</Link>
            </nav>
            <div>
              <button className="bg-white text-primary px-4 py-2 rounded-md font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">habit track</h3>
              <p className="text-gray-300">Create a proper step by step process to build this habit tracker website, where we use supabase for storage and authentication., Users can create habits and set goals accordigly.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@habittrack.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} habit track. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;