import React from 'react';
import { CreateRecipeForm } from '../components/CreateRecipeForm';

export const CreateRecipe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <CreateRecipeForm />
      </div>
    </div>
  );
};