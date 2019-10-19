import { TestBed } from '@angular/core/testing';

import { IdResolverService } from './id-resolver.service';

describe('IdResolverServic', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdResolverService = TestBed.get(IdResolverService);
    expect(service).toBeTruthy();
  });
});
