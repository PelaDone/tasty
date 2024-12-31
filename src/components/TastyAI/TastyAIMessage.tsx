import React from 'react';
import { Bot, User } from 'lucide-react';

interface TastyAIMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const TastyAIMessage: React.FC<TastyAIMessageProps> = ({ role, content }) => {
  const isAssistant = role === 'assistant';
  
  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} gap-2`}>
      {isAssistant && (
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-orange-600" />
        </div>
      )}
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isAssistant
            ? 'bg-orange-50 text-gray-800 rounded-tl-sm'
            : 'bg-orange-500 text-white rounded-tr-sm'
        }`}
      >
        {content}
      </div>
      {!isAssistant && (
        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};