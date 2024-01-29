import { Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation } from "@angular/core";
import { StartStoreService } from "./start-store.service";
import { QuoteQueryInput, QuoteType } from "./start.model";

@Component({
    selector: "app-start",
    templateUrl: "./start.component.html",
    styleUrls: ['./start.component.less'],
    host: {
        class: 'main_wrapper'
    },
    encapsulation: ViewEncapsulation.None,
})
export class StartComponent implements OnDestroy {

    @Output() objectForQuery = new EventEmitter<QuoteQueryInput>();

    @Input() imageMove!: string;
    @Input() imageStorage!: string;
    @Input() imageBoth!: string;
    @Input() imageDefault!: string;
    @Input() set imageArrow(value: string) {
        this._startStoreService.imageArrow = value;
    };
    @Input() imageCalendar(value: string) {
        this._startStoreService.imageCalendar = value;
    };

    public readonly type = QuoteType;
    public isOption = false;
    public selectedType!: QuoteType;

    constructor(
        private _startStoreService: StartStoreService,
    ) {
    }

    ngOnDestroy(): void {
        this.isOption = false;
        this._startStoreService.resetData();
    }

    public onBack(): void {
        this.isOption = false;
    }

    public onSelectQuoteType(type: QuoteType): void {
        this.isOption = true;
        this.selectedType = type;
    }

    public onObjectForQuery(input: QuoteQueryInput): void {
        this.objectForQuery.emit(input);
    }
}
