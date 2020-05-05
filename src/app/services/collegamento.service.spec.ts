import { TestBed } from '@angular/core/testing';

import { CollegamentoService } from './collegamento.service';

describe('CollegamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegamentoService = TestBed.get(CollegamentoService);
    expect(service).toBeTruthy();
  });
});
