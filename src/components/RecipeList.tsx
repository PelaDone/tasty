import { useEffect, useState } from 'react';
import { RecipeService } from '../../api/services/RecipeService.js';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const recipeService = new RecipeService();

  useEffect(() => {
    recipeService.getAllRecipes().then(setRecipes);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800 mb-2">{recipe.title}</h3>
          <p className="text-sm text-gray-600">{recipe.description}</p>
          <div className="mt-4 flex items-center">
            <img
              src={recipe.author.avatar}
              alt={recipe.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{recipe.author.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
