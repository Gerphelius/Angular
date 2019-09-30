import { Component, OnInit } from '@angular/core';
import { allRecipes } from 'src/app/allRecipes';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  allRecipes: Array<object> = allRecipes;

  constructor() { }

  ngOnInit() {
  }

  formToObject = elements => [].reduce.call(elements, (data, element) => {
    if (element.localName !== 'button') {
      data[element.id] = element.value;
    }
    return data;
  }, {});

  addNewRecipe(e) {
    e.preventDefault();
    const newRecipe = this.formToObject(e.path[1].elements);
    newRecipe['likes'] = 0;
    allRecipes.push(newRecipe)
  }
}
