import axios from 'axios';
import { API_CONFIG } from '../config/constants';
import { Recipe } from '../types/Recipe';

const api = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const recipeApi = {
  getAllRecipes: async (): Promise<Recipe[]> => {
    try {
      const response = await api.get('/recipes');
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getRecipeById: async (id: string): Promise<Recipe> => {
    try {
      const response = await api.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  createRecipe: async (recipe: Omit<Recipe, 'id' | 'likes'>): Promise<Recipe> => {
    try {
      const response = await api.post('/recipes', recipe);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};