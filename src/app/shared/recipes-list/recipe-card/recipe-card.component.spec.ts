import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardComponent } from './recipe-card.component';

import { 
  faThumbsUp, 
  faTrashAlt, 
  faThumbsDown, 
  faHeart, 
  faEye, 
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

fdescribe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        faThumbsUp, 
        faTrashAlt, 
        faThumbsDown, 
        faHeart, 
        faEye, 
        faPencilAlt
      ],
      declarations: [ RecipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
