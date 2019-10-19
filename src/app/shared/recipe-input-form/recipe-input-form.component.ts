import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../interfaces/recipe-interface';
import { Categories } from '../interfaces/categories';

@Component({
  selector: 'app-recipe-input-form',
  templateUrl: './recipe-input-form.component.html',
  styleUrls: ['./recipe-input-form.component.scss']
})
export class RecipeInputFormComponent implements OnInit {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly route: ActivatedRoute, 
    private readonly router: Router,
    private formBuilder: FormBuilder
  ) { }
  
  faPlus = faPlus;

  recipe: Recipe = this.route.snapshot.data.id;
  btnName: string = this.route.snapshot.data.btnName;
  recipeInputForm: any;
  isRecipeExist: boolean = false;
  url = new RegExp(
    '^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i'
  );
  categories: Categories[] = this.recipesService.categories;
 
  ngOnInit() {
    this.recipeInputForm = this.formBuilder.group({
      title: new FormControl(this.recipe ? this.recipe.title : '', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      description: new FormControl(this.recipe ? this.recipe.description : '', Validators.required),
      photoUrl: new FormControl(this.recipe ? this.recipe.photoUrl : '', [
        Validators.required, 
        Validators.pattern(this.url)
      ]),
      ingredients: this.formBuilder.array(this.recipe ? this.recipe.ingredients : []),
      instructions: new FormControl(this.recipe ? this.recipe.instructions : '', Validators.required),
      categoryId: [this.categories[0].name]
    });
  }
 
  submit(inputsObj: Recipe) {
  	if (this.btnName === 'Add recipe') {
      this.recipesService.recipesSubject.next(this.recipesService.addNewRecipe(inputsObj));
    } else if (this.btnName === 'Edit recipe') {
      this.recipesService.recipesSubject.next(this.recipesService.editRecipe(inputsObj, this.recipe.id));
    }
    this.router.navigate(['..'])
  }

  get title() {
    return this.recipeInputForm.get('title');
  }

  get description() {
    return this.recipeInputForm.get('description');
  }

  get photoUrl() {
    return this.recipeInputForm.get('photoUrl');
  }

  get instructions() {
    return this.recipeInputForm.get('instructions');
  }
  
  get ingredients() {
    return this.recipeInputForm.get('ingredients') as FormArray;
  }

  addIngredients() {
    this.ingredients.push(this.formBuilder.control(''));
  }

  deleteIngredient(control: any, index: number) {
    control.removeAt(index)
  }
}