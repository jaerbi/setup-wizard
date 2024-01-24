import { Component, EventEmitter, OnDestroy, Output } from "@angular/core";
import { StartStoreService } from "./start-store.service";
import { QuoteQueryInput, QuoteType } from "./start.model";

@Component({
    selector: "app-start",
    templateUrl: "./start.component.html",
    host: {
        class: 'main_wrapper'
    }
})
export class StartComponent implements OnDestroy {

    @Output() objectForQuery = new EventEmitter<QuoteQueryInput>();

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
