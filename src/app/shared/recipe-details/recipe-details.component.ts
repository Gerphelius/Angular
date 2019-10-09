import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent {
  constructor(private readonly route: ActivatedRoute) { }

  curRecipeObj: any = this.route.snapshot.data.title;
}