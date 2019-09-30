import { Component, OnInit } from '@angular/core';

import { allRecipes } from '../../allRecipes';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  recipes: Array<object> = allRecipes;

  constructor() { }

  ngOnInit() {
  }

}
