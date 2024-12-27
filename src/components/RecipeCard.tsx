import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Heart, User } from 'lucide-react';
import type { Recipe } from '../types/Recipe';
import { DEFAULT_IMAGES } from '../constants/defaults';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const getDefaultRecipeImage = () => {
    // Select a random default recipe image
    const images = Object.values(DEFAULT_IMAGES.RECIPE);
    return images[Math.floor(Math.random() * images.length)];
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 sm:h-56">
        <img
          src={recipe.imageUrl || getDefaultRecipeImage()}
          alt={recipe.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = getDefaultRecipeImage();
          }}
        />
        <div className="absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <Heart className="w-5 h-5 text-red-500" />
          </motion.button>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          {recipe.author ? (
            <>
              <img
                src={recipe.author.avatar || DEFAULT_IMAGES.USER.AVATAR}
                alt={recipe.author.name}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGES.USER.AVATAR;
                }}
              />
              <span className="text-sm text-gray-600">{recipe.author.name}</span>
            </>
          ) : (
            <>
              <User className="w-8 h-8 p-1 rounded-full bg-gray-100 text-gray-500" />
              <span className="text-sm text-gray-600">Anonymous</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};