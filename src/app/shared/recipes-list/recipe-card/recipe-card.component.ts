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

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faHeart = faHeart;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  
  @Input() recipe: any;

  removeRecipe = this.recipesService.removeRecipe;

  constructor(private readonly recipesService: RecipesService) {}
}
