import { TestBed } from '@angular/core/testing';

import { PassgenreService } from './passgenre.service';

describe('PassgenreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassgenreService = TestBed.get(PassgenreService);
    expect(service).toBeTruthy();
  });
});
