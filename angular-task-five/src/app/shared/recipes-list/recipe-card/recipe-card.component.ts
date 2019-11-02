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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  constructor(
    private readonly recipesService: RecipesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}
  
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faHeart = faHeart;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  
  @Input() recipe: Recipe;

  removeRecipe(id: string) {
    this.recipesService.removeFromFav(id);  
    if (this.router.url === '/all-recipes') {
      this.recipesService.removeRecipe(id); 
    } 
  }

  addLike(recipe: Recipe) {
    this.recipesService.addLike(recipe);
  }

  addDislike(recipe: Recipe) {
    this.recipesService.addDislike(recipe);
  }
}
