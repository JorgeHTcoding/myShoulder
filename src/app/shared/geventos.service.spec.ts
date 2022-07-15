import { TestBed } from '@angular/core/testing';

import { GeventosService } from '../shared/geventos.service';

describe('GeventosService', () => {
  let service: GeventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
