import { TestBed } from '@angular/core/testing';

import { IsSelectedGuard } from './is-selected.guard';

describe('IsSelectedGuard', () => {
  let guard: IsSelectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSelectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
