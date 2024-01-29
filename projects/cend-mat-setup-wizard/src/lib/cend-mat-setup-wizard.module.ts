import { NgModule } from '@angular/core';
import { CendMatSetupWizardComponent } from './cend-mat-setup-wizard.component';
import { StartModule } from './start/start.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CendMatSetupWizardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    StartModule,
  ],
  exports: [
    CendMatSetupWizardComponent
  ]
})
export class CendMatSetupWizardModule { }
