import { Component, OnInit } from '@angular/core';

import { favoriteRecipes } from '../../favoriteRecipes';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  recipes: Array<object> = favoriteRecipes;

  constructor() { }

  ngOnInit() {
  }

}
