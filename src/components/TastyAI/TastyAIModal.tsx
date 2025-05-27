import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { TastyAIMessage } from './TastyAIMessage';
import { TastyAIWelcome } from './TastyAIWelcome';
import { aiService } from '../../services/aiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface TastyAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TastyAIModal: React.FC<TastyAIModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponse = await aiService.getChatResponse(userMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing your request right now. Please try again later! 🙏"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl h-[600px] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
              <h2 className="text-xl font-bold">👨‍🍳 Tasty AI (In Process)</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-orange-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <TastyAIWelcome />
              {messages.map((message, index) => (
                <TastyAIMessage key={index} {...message} />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me about recipes, ingredients, or cooking tips..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};