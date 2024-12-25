declare class RecipeService {
  constructor(baseUrl?: string);
  baseUrl: string;
  getAllRecipes(): Promise<any>;
  getRecipeById(id: string): Promise<any>;
  createRecipe(data: any): Promise<any>;
  updateRecipe(id: string, data: any): Promise<any>;
  deleteRecipe(id: string): Promise<any>;
}

export default RecipeService;