import { TestBed } from '@angular/core/testing';

import { IngredientsResolverService } from './ingredients-resolver.service';

describe('IngredientsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientsResolverService = TestBed.get(IngredientsResolverService);
    expect(service).toBeTruthy();
  });
});
