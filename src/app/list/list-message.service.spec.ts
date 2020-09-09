import { TestBed } from '@angular/core/testing';

import { ListMessageService } from './list-message.service';

describe('ListMessageService', () => {
  let service: ListMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
