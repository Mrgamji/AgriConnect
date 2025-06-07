import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Menu, X, User, LogOut, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors">
            <Sprout className="h-8 w-8" />
            <span className="text-2xl font-bold">AgriConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Marketplace
            </Link>
            {user?.role === 'farmer' && (
              <Link to="/dashboard/farmer" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                My Dashboard
              </Link>
            )}
            {user?.role === 'buyer' && (
              <Link to="/dashboard/buyer" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                My Dashboard
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/dashboard/admin" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Admin Panel
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{user.full_name}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full capitalize">
                    {user.role}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/auth/login"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              {user && (
                <Link
                  to={`/dashboard/${user.role}`}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {user ? (
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">{user.full_name}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <Link
                    to="/auth/login"
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;