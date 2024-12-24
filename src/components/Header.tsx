import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Search, UserCircle, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';

export const Header: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleShareRecipe = () => {
    if (user) {
      navigate('/create');
      setIsMobileMenuOpen(false);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <UtensilsCrossed className="w-8 h-8 text-orange-500" />
                <h1 className="text-2xl font-bold text-gray-800">Simply Tasty</h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-between ml-8">
              <div className="w-full max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center gap-4 ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShareRecipe}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"
                >
                  Share Recipe
                </motion.button>

                {user ? (
                  <div className="flex items-center gap-2">
                    <UserCircle className="w-8 h-8 text-gray-600" />
                    <button
                      onClick={() => signOut()}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <LogOut className="w-6 h-6" />
                    </button>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsAuthModalOpen(true)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <UserCircle className="w-8 h-8" />
                  </motion.button>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShareRecipe}
                  className="w-full bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"
                >
                  Share Recipe
                </motion.button>

                {user ? (
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <UserCircle className="w-8 h-8 text-gray-600" />
                      <span className="text-gray-600">Profile</span>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <LogOut className="w-6 h-6" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-2 text-gray-600 self-center"
                  >
                    <UserCircle className="w-8 h-8" />
                    <span>Sign In</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};