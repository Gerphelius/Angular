import { TestBed } from '@angular/core/testing';

import { TitleResolverService } from './title-resolver.service';

describe('TitleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleResolverService = TestBed.get(TitleResolverService);
    expect(service).toBeTruthy();
  });
});
