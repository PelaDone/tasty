// api/controllers/recipeController.js
import { RecipeService } from '../services/recipeService.js';

export class RecipeController {
  constructor() {
    this.recipeService = new RecipeService();
  }

  getAllRecipes = async (req, res, next) => {
    try {
      const recipes = await this.recipeService.getAllRecipes();
      res.json(recipes);
    } catch (error) {
      next(error);
    }
  };

  getRecipeById = async (req, res, next) => {
    try {
      const recipe = await this.recipeService.getRecipeById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      next(error);
    }
  };

  createRecipe = async (req, res, next) => {
    try {
      const recipe = await this.recipeService.createRecipe(req.body);
      res.status(201).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  updateRecipe = async (req, res, next) => {
    try {
      const recipe = await this.recipeService.updateRecipe(req.params.id, req.body);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      next(error);
    }
  };

  deleteRecipe = async (req, res, next) => {
    try {
      const success = await this.recipeService.deleteRecipe(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}