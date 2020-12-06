import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';

describe('BasicAuthHttpInterceptorServiceService', () => {
  let service: BasicAuthHttpInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHttpInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
