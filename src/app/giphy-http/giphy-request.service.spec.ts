import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy-request.service';

describe('HttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
