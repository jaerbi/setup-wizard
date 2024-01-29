import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuoteQueryInput } from './start/start.model';

@Component({
  selector: 'lib-cend-mat-setup-wizard',
  template: `
    <p>
      cend-mat-setup-wizard works! OR not, just testing v-11
    </p>
    <app-start (objectForQuery)="objectForQuery.emit($event)" 
        [imageMove]="imageMove"
        [imageStorage]="imageStorage"
        [imageBoth]="imageBoth"
        [imageDefault]="imageDefault"
        [imageArrow]="imageArrow"
        [imageCalendar]="imageCalendar"
    ></app-start>
  `,
})
export class CendMatSetupWizardComponent {

    @Output() objectForQuery = new EventEmitter<QuoteQueryInput>();
    @Input() imageMove!: string;
    @Input() imageStorage!: string;
    @Input() imageBoth!: string;
    @Input() imageArrow!: string;
    @Input() imageCalendar!: string;
    @Input() imageDefault!: string;
}
