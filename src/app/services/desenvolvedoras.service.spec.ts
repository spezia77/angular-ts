import { TestBed } from '@angular/core/testing';

import { DesenvolvedorasService } from './desenvolvedoras.service';

describe('DesenvolvedorasService', () => {
  let service: DesenvolvedorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesenvolvedorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
