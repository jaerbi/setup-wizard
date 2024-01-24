import { NgModule } from '@angular/core';
import { CendMatSetupWizardComponent } from './cend-mat-setup-wizard.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    CendMatSetupWizardComponent
  ],
  imports: [
    StartComponent,
  ],
  exports: [
    CendMatSetupWizardComponent
  ]
})
export class CendMatSetupWizardModule { }
