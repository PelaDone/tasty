import React from 'react';
import { Utensils, Timer, Sparkles } from 'lucide-react';

export const TastyAIWelcome: React.FC = () => {
  return (
    <div className="text-center space-y-4 p-6 bg-orange-50 rounded-xl mb-4">
      <h3 className="text-xl font-bold text-gray-800">👨‍🍳 Welcome to Tasty AI!</h3>
      <p className="text-gray-600">
        I'm your personal culinary assistant. Here's how I can help:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Utensils className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Recipe suggestions based on ingredients</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Timer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Quick meal ideas for busy days</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Sparkles className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Creative cooking tips and tricks</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Try asking: "What can I cook with chicken and vegetables?" 🍗
      </p>
    </div>
  );
};