import { api } from '../lib/api';
import type { Recipe } from '../types/Recipe';

export const recipeService = {
  getAllRecipes: async (): Promise<Recipe[]> => {
    const { data } = await api.get('/recipes');
    return data;
  },

  getRecipeById: async (id: string): Promise<Recipe> => {
    const { data } = await api.get(`/recipes/${id}`);
    return data;
  },

  createRecipe: async (recipe: Omit<Recipe, 'id' | 'likes'>): Promise<Recipe> => {
    const { data } = await api.post('/recipes', recipe);
    return data;
  },
};