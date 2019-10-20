import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { IngredientsService } from './ingredients.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of, Observable } from 'rxjs';

fdescribe('IngredientsService', () => {
  const ingredients: any = {
    get: () => of([]),
  }

  const http: any = {
    get: (): Observable<any> => of({}),
    delete: (): Observable<null> => of(null),
  }

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      IngredientsService,
      HttpClient,
      HttpHandler,
      HttpTestingController
    ]
  }));

  it('should be created', () => {
    const service: IngredientsService = TestBed.get(IngredientsService);
    expect(service).toBeTruthy();
  });

  describe('Ingredients', () => {
    let service: IngredientsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      service = new IngredientsService(http);
      httpMock = TestBed.get(HttpTestingController);
    })

    it('should call http ingredients get method', () => {
      spyOn(http, 'get');

      service.getIngredientsArr();

      expect(http.get).toHaveBeenCalledWith('http://localhost:3000/api/purchases');
    })

    it('should get ingredients array', () => {
      spyOn(http, 'get').and.returnValue(of(ingredients))

      service.getIngredientsArr().subscribe((data) => {
        expect(data).toEqual(ingredients);
      })
    })

    it('should call http delete method', () => {
      const id = '-LrYUSWWcl2QaRbG6LKM';

      const req = httpMock.expectOne(                      // here is an error 
        `http://localhost:3000/api/purchases/${id}`,
        'delete to api'
      );

      service.removeFromPurchases(id);

      expect(req.request.method).toBe('DELETE');
    })

    describe('should remove recipe', () => {
      it('should make delete request', async () => {
        const id = 'id';
        spyOn(http, 'delete').and.returnValue({ subscribe: () => {} });
        service.removeFromPurchases(id);
        expect(http.delete).toHaveBeenCalled();
      });
    });

  })
});