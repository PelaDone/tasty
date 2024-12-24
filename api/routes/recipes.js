import express from 'express';
import { validateRecipe } from '../middleware/validators.js';
import { RecipeController } from '../controllers/recipeController.js';

export const recipeRouter = express.Router();
const controller = new RecipeController();

recipeRouter.get('/', controller.getAllRecipes);
recipeRouter.get('/:id', controller.getRecipeById);
recipeRouter.post('/', validateRecipe, controller.createRecipe);
recipeRouter.put('/:id', validateRecipe, controller.updateRecipe);
recipeRouter.delete('/:id', controller.deleteRecipe);