import { supabase } from '../config/supabase.js';

export class RecipeService {
  async getAllRecipes() {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch recipes');
    }

    return data;
  }

  async getRecipeById(id) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch recipe');
    }

    return data;
  }

  async createRecipe(recipeData) {
    const { data, error } = await supabase
      .from('recipes')
      .insert([recipeData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to create recipe');
    }

    return data;
  }

  async updateRecipe(id, recipeData) {
    const { data, error } = await supabase
      .from('recipes')
      .update(recipeData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to update recipe');
    }

    return data;
  }

  async deleteRecipe(id) {
    const { error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to delete recipe');
    }

    return true;
  }
}