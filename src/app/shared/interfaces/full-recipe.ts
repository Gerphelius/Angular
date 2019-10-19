export interface FullRecipe {
  categoryId: string,
  description: string,
  id: string,
  ingredients: string[],
  instructiobs: string,
  likes: number,
  photoUrl: string,
  title: string,
  category: string,
  isFavorite: boolean
}
