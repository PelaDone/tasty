// In-memory storage for recipes
const recipes = new Map();

export class RecipeService {
  async getAllRecipes() {
    return Array.from(recipes.values());
  }

  async getRecipeById(id) {
    const recipe = recipes.get(id);
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe;
  }

  async createRecipe(recipeData) {
    const id = crypto.randomUUID();
    const recipe = {
      id,
      ...recipeData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    recipes.set(id, recipe);
    return recipe;
  }

  async updateRecipe(id, recipeData) {
    const recipe = recipes.get(id);
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    const updatedRecipe = {
      ...recipe,
      ...recipeData,
      updated_at: new Date().toISOString()
    };
    recipes.set(id, updatedRecipe);
    return updatedRecipe;
  }

  async deleteRecipe(id) {
    const exists = recipes.has(id);
    if (!exists) {
      throw new Error('Recipe not found');
    }
    recipes.delete(id);
    return true;
  }
}