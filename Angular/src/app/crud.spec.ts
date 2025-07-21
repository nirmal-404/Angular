import { TestBed } from '@angular/core/testing';

import { Crud } from './crud';

describe('Crud', () => {
  let service: Crud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
