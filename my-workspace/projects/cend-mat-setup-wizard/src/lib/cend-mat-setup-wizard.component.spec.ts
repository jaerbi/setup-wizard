import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CendMatSetupWizardComponent } from './cend-mat-setup-wizard.component';

describe('CendMatSetupWizardComponent', () => {
  let component: CendMatSetupWizardComponent;
  let fixture: ComponentFixture<CendMatSetupWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CendMatSetupWizardComponent]
    });
    fixture = TestBed.createComponent(CendMatSetupWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
