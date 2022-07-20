import { TestBed } from '@angular/core/testing';

import { CartaPreService } from './carta-pre.service';

describe('CartaPreService', () => {
  let service: CartaPreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartaPreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
