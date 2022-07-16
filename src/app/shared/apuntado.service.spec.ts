import { TestBed } from '@angular/core/testing';

import { ApuntadoService } from './apuntado.service';

describe('ApuntadoService', () => {
  let service: ApuntadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuntadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
