import { TestBed } from '@angular/core/testing';

import { ShopUrlService } from './shop-url.service';

describe('ShopUrlService', () => {
  let service: ShopUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
