import { TestBed } from '@angular/core/testing';

import { CendMatSetupWizardService } from './cend-mat-setup-wizard.service';

describe('CendMatSetupWizardService', () => {
  let service: CendMatSetupWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CendMatSetupWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
