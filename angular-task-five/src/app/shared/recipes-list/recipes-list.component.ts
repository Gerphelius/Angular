import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interfaces/recipe-interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  constructor(private readonly recipesService: RecipesService, private route: ActivatedRoute) {}
  
  recipes: Recipe[];

  ngOnInit() {
    if (this.route.snapshot.data.isAllRecipes) {
      this.recipes = this.route.snapshot.data.allRecipesArr;
      this.recipesService.recipesSubject.subscribe(() => {
        this.recipesService.getRecipes().subscribe((recipes: Recipe[]) => this.recipes = recipes)
      })
    } else {
      this.recipes = this.route.snapshot.data.favRecipesArr;
      this.recipesService.recipesSubject.subscribe(() => {
        this.recipesService.getFavRecipes().subscribe((recipes: Recipe[]) => this.recipes = recipes)
      })
    }
  }
}
