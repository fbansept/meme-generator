import { TestBed } from '@angular/core/testing';

import { ConnecteGuard } from './connecte.guard';

describe('ConnecteGuard', () => {
  let guard: ConnecteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnecteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
