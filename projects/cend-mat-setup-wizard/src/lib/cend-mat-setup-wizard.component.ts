import { Component, EventEmitter, Output } from '@angular/core';
import { QuoteQueryInput } from './start/start.model';

@Component({
  selector: 'lib-cend-mat-setup-wizard',
  template: `
    <p>
      cend-mat-setup-wizard works!
    </p>
    <app-start (objectForQuery)="objectForQuery.emit($event)"></app-start>
  `,
  styles: [
  ]
})
export class CendMatSetupWizardComponent {

    @Output() objectForQuery = new EventEmitter<QuoteQueryInput>();
}
