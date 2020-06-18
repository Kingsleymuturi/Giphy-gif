import { TestBed } from '@angular/core/testing';

import { StickerService } from './stickerservice.service';

describe('StickerserviceService', () => {
  let service: StickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
