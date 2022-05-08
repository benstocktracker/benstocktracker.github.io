import { TestBed } from '@angular/core/testing';

import { StocksDataResolver } from './data.resolver';

describe('StocksDataResolver', () => {
  let resolver: StocksDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StocksDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
