import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, UserCircle, LogOut, Menu, User, Bot, Search } from 'lucide-react';
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

  const handleShareRecipe = () => {
    if (user) {
      navigate('/create');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <header className="relative bg-white shadow-sm">
      <div className="px-4 py-4">
        <div className="flex items-center md:justify-between justify-around">
          <Link to="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <UtensilsCrossed className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">Simply Tasty</h1>
            </motion.div>
          </Link>

          {/* Search Button */}
          <div className="hidden md:flex flex-1 items-center justify-between ml-8">
            <div className="w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Tasty AI Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAIModalOpen(true)}
            className="flex items-center md:gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-colors text-sm md:text-base"
          >
            <Bot className="w-5 h-5 hidden md:flex" />
            <span className='hidden md:flex'>👨‍🍳 Tasty AI</span>
            <span className='flex md:hidden'>Tasty AI</span>
          </motion.button>

          {/* Share Recipe Button */}
          <div className="flex items-center md:gap-4 md:ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShareRecipe}
              className="flex items-center md:gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-colors text-sm md:text-base"
            >
              <span className='hidden md:flex'>Share Recipe</span>
              <span className='flex md:hidden'>Share</span>
            </motion.button>
          </div>

          {/* User Menu */}
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
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm md:text-base"
              >
                <UserCircle className="w-8 h-8" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
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
                <span className="text-xs md:text-sm font-medium text-gray-600">
                  {user?.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleProfileClick}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-sm md:text-base"
            >
              <User className="w-5 h-5" />
              Profile
            </button>

            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-sm md:text-base"
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
