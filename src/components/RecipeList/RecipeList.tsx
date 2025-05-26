import React from 'react';
import { recipes } from '../../data/recipes';
import { RecipeCard } from '../RecipeCard';

export const RecipeList: React.FC = () => {
  if (!recipes.length) {
    return <div className="text-center text-gray-600">No recipes found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};