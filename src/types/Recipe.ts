export interface Author {
  id: string;
  name: string;
  avatar?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cookingTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  author?: Author;
  likes: number;
  createdAt?: string;
  updatedAt?: string;
}