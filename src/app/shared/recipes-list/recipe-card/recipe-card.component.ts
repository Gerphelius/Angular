import { Component, Input } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { 
  faThumbsUp, 
  faTrashAlt, 
  faThumbsDown, 
  faHeart, 
  faEye, 
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../../interfaces/recipe-interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  constructor(private readonly recipesService: RecipesService) {}
  
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faHeart = faHeart;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  
  @Input() recipe: Recipe;
  allRecipes = this.recipesService.allRecipes;
  removeRecipe = this.recipesService.removeRecipe;
}
