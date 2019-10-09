import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-input-form',
  templateUrl: './recipe-input-form.component.html',
  styleUrls: ['./recipe-input-form.component.scss']
})

export class RecipeInputFormComponent implements OnInit {
  constructor(private readonly recipesService: RecipesService, private readonly route: ActivatedRoute) { }
  
  btnName: string;
  allRecipes: Array<any>;
  addNewRecipe: any;
  editRecipe: any;
  isRecipeExist: boolean;
  curRecipeObj: any = this.route.snapshot.data.title;

  ngOnInit() {
    this.btnName = this.route.snapshot.data.btnName;
    this.allRecipes = this.recipesService.allRecipes;
    this.addNewRecipe = this.recipesService.addNewRecipe;
    this.editRecipe = this.recipesService.editRecipe;
    this.isRecipeExist = this.recipesService.isRecipeExist;
  }
}