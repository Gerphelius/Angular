import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponent } from './recipes-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AppModule } from 'src/app/app.module';

fdescribe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AppModule],
      declarations: [ RecipesListComponent, RecipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
