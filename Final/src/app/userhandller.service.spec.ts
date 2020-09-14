import { TestBed } from '@angular/core/testing';

import { UserhandllerService } from './userhandller.service';

describe('UserhandllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserhandllerService = TestBed.get(UserhandllerService);
    expect(service).toBeTruthy();
  });
});
