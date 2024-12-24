export class RecipeService {
  constructor(baseUrl = 'http://localhost:3000/api/recipes') {
    this.baseUrl = baseUrl;
  }

  async getAllRecipes() {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    return response.json();
  }

  async getRecipeById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }
    return response.json();
  }

  async createRecipe(data) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create recipe');
    }
    return response.json();
  }

  async updateRecipe(id, data) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update recipe');
    }
    return response.json();
  }

  async deleteRecipe(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete recipe');
    }
    return response.json();
  }
}
