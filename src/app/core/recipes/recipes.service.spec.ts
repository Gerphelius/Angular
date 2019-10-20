import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { RecipesService } from './recipes.service';

fdescribe('RecipesService', () => {

  const recipes: any = {
    get: () => of([]),
  }

  const http: any = {
    get: (): Observable<any> => of({}),
  }

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      RecipesService,
      HttpClient,
      HttpHandler,
      HttpTestingController
    ]
  }));

  it('should be created', () => {
    const service: RecipesService = TestBed.get(RecipesService);
    expect(service).toBeTruthy();
  });

  describe('Recipes', () => {
    let service: RecipesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      service = new RecipesService(http);
    })

    it('should call http recipes get method', () => {              // working without if statement in getRecipes()
      spyOn(http, 'get');

      service.getRecipes();

      expect(http.get).toHaveBeenCalledWith('http://localhost:3000/api/recipes');
    })

    it('should call http favorites recipes get method', () => {
      spyOn(http, 'get');

      service.getFavRecipes();

      expect(http.get).toHaveBeenCalledWith('http://localhost:3000/api/favorites');
    })

    it('should get array of all recipes', () => {
      spyOn(http, 'get').and.returnValue(of(recipes))

      service.getRecipes().subscribe((data) => {
        expect(data).toEqual(recipes);
      })
    })

    it('should get favorite recipes array', () => {
      spyOn(http, 'get').and.returnValue(of(recipes))

      service.getFavRecipes().subscribe((data) => {
        expect(data).toEqual(recipes);
      })
    })

    it('should get favorite recipes array', () => {
      const recipe = {
        "categoryId" : "-L4N7j8yE8Thcztca1S_",
        "description" : "A classic Italian dish prepared with tomato sauce and mozzarella, with a few additions by Chef John. Sure to impress your friends and family!",
        "id" : "-Lr-UqArbWJRCZhU9nuJ",
        "ingredients" : [
          {"-LrQ7Z5W_GJD2gpLDO5r": "4 skinless, boneless chicken breast halves"},
          {"-LrQ7Z7r-YsP27ygpI79": "salt and freshly ground black pepper to taste"},
          {"-LrQ7ZAC7SpWEgqCn1Uo": "2 eggs"},
          {"-LrQ7ZCbil4Nl_6rGa7t": "1 cup panko bread crumbs, or more as needed"},
          {"-LrQ7ZF-lCgsaqFV28gj": "1/2 cup grated Parmesan cheese"},
          {"-LrQ7ZHNCRF91xCujIFh": "2 tablespoons all-purpose flour, or more if needed"},
          {"-LrQ7ZJn9n4mOhdBm0-1": "1 cup olive oil for frying"},
          {"-LrQ7ZM9bNI_ht-RrZJw": "1/2 cup prepared tomato sauce"},
          {"-LrQ7ZOYKngfhB1zbHZT": "1/4 cup fresh mozzarella, cut into small cubes"},
          {"-LrQ7ZQujO18p-JaYkGe": "1/4 cup chopped fresh basil"},
          {"-LrQ7ZTHUmRxaOn6YpS6": "1/2 cup grated provolone cheese"},
          {"-LrQ7ZVewR5sSm1eqQxy": "1/4 cup grated Parmesan cheese"},
          {"-LrQ7ZY0v0d_6VoJ5xMP": "1 tablespoon olive oil"}
        ],
        "instructions" : "Preheat an oven to 450 degrees F (230 degrees C).\n    Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.\n    Beat eggs in a shallow bowl and set aside.\n    Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.\n    Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.\n    Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.\n    Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.\n    Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.\n    Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
        "likes" : 1,
        "photoUrl" : "http://images.media-allrecipes.com/userphotos/250x250/1036363.jpg",
        "title" : "Chicken Parmesan testo"
      }
      
      spyOn(http, 'get').and.returnValue(of(recipe))

      service.getRecipeById('-Lr-UqArbWJRCZhU9nuJ').subscribe((data) => {
        expect(data).toEqual(recipe);
      })
    })
  })
})