import { TestBed } from '@angular/core/testing';

import { PapeterieService } from './papeterie-service.service';

describe('PapeterieServiceService', () => {
  let service: PapeterieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapeterieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
