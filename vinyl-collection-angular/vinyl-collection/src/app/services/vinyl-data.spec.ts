import { TestBed } from '@angular/core/testing';

import { VinylData } from './vinyl-data';

describe('VinylData', () => {
  let service: VinylData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinylData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
