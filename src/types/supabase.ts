export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recipes: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          cooking_time: number
          difficulty: 'Easy' | 'Medium' | 'Hard'
          ingredients: string[]
          instructions: string[]
          author_id: string
          likes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          cooking_time: number
          difficulty: 'Easy' | 'Medium' | 'Hard'
          ingredients: string[]
          instructions: string[]
          author_id: string
          likes?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          cooking_time?: number
          difficulty?: 'Easy' | 'Medium' | 'Hard'
          ingredients?: string[]
          instructions?: string[]
          author_id?: string
          likes?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}