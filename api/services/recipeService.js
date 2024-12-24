export class RecipeService {
  constructor() {
    // In-memory storage for now
    this.recipes = [
      {
        id: '1',
        title: 'Creamy Garlic Pasta',
        description: 'A delicious Italian pasta dish with creamy garlic sauce',
        imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
        cookingTime: 30,
        difficulty: 'Easy',
        ingredients: ['pasta', 'garlic', 'cream'],
        instructions: ['Boil pasta', 'Make sauce', 'Combine'],
        author: {
          name: 'Chef Maria',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        },
        likes: 245,
      },
      {
        id: '2',
        title: 'Spicy Thai Curry',
        description: 'Authentic Thai red curry with coconut milk',
        imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
        cookingTime: 45,
        difficulty: 'Medium',
        ingredients: ['curry paste', 'coconut milk', 'vegetables'],
        instructions: ['Prepare curry paste', 'Cook vegetables', 'Simmer'],
        author: {
          name: 'Chef Tom',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        },
        likes: 189,
      },
    ];
  }

  getAllRecipes() {
    return Promise.resolve(this.recipes);
  }

  getRecipeById(id) {
    const recipe = this.recipes.find(r => r.id === id);
    return Promise.resolve(recipe);
  }

  createRecipe(data) {
    const recipe = {
      id: Date.now().toString(),
      ...data,
      likes: 0,
    };
    this.recipes.push(recipe);
    return Promise.resolve(recipe);
  }

  updateRecipe(id, data) {
    const index = this.recipes.findIndex(r => r.id === id);
    if (index === -1) return Promise.resolve(null);
    
    this.recipes[index] = { ...this.recipes[index], ...data };
    return Promise.resolve(this.recipes[index]);
  }

  deleteRecipe(id) {
    const index = this.recipes.findIndex(r => r.id === id);
    if (index === -1) return Promise.resolve(false);
    
    this.recipes.splice(index, 1);
    return Promise.resolve(true);
  }
}