import { TestBed } from '@angular/core/testing';

import { AuthorizationsGuard } from './authorizations.guard';

describe('AuthorizationsGuard', () => {
  let guard: AuthorizationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
