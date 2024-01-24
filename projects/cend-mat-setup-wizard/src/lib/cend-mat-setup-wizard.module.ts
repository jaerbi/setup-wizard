import { NgModule } from '@angular/core';
import { CendMatSetupWizardComponent } from './cend-mat-setup-wizard.component';
import { StartModule } from './start/start.module';



@NgModule({
  declarations: [
    CendMatSetupWizardComponent
  ],
  imports: [
    StartModule,
  ],
  exports: [
    CendMatSetupWizardComponent
  ]
})
export class CendMatSetupWizardModule { }
