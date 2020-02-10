import { TestBed } from '@angular/core/testing';

import { InboxLibService } from './inbox-lib.service';

describe('InboxLibService', () => {
  let service: InboxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
