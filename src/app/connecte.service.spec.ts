import { TestBed } from '@angular/core/testing';

import { ConnecteService } from './connecte.service';

describe('ConnecteService', () => {
  let service: ConnecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
