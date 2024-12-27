import React, { useEffect, useState } from 'react';
import { Recipe } from '../../types/Recipe';
import { recipeApi } from '../../services/api';
import { RecipeCard } from '../RecipeCard';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorMessage } from '../ui/ErrorMessage';

export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await recipeApi.getAllRecipes();
        setRecipes(data);
      } catch (err) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Failed to load recipes. Please try again later.';
        setError(errorMessage);
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No recipes found. Be the first to share a recipe!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};