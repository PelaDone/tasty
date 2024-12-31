import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, UserCircle, LogOut, Menu, User, Bot } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';
import { TastyAIModal } from './TastyAI/TastyAIModal';

export const Header: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleProfileClick = () => {
    setIsMenuOpen(false);
    navigate('/profile');
  };

  return (
    <header className="relative bg-white shadow-sm">
      <div className="px-4 py-4">
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

          {/* Tasty AI Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAIModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>👨‍🍳 Tasty AI</span>
          </motion.button>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <UserCircle className="w-8 h-8" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 mr-4"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <UserCircle className="w-6 h-6 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">
                  {user?.email}
                </span>
              </div>
            </div>
            
            <button
              onClick={handleProfileClick}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              Profile
            </button>
            
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <TastyAIModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
    </header>
  );
};