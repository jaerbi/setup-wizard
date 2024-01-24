import { Injectable } from "@angular/core";
import { StartStoreService } from "./start-store.service";
import { QuoteQueryInput, QuoteType, StartFormsData } from "./start.model";

@Injectable()
export class StartService {

    constructor(
        private _startStoreService: StartStoreService,
    ) { }

    public getObjectForQuery(type: QuoteType): QuoteQueryInput {
        const input: QuoteQueryInput = new QuoteQueryInput();
        input.type = type;
        const data: StartFormsData = this._startStoreService.startFormsData;
        const { moveForm, storageForm, bothForm } = data;

        if (type === QuoteType.Move) {
            input.startDate = moveForm.controls['date'].value;
            input.promoCode = moveForm.controls['code'].value;
            input.originPostalCode = moveForm.controls['zipFrom'].value;
            input.destinationPostalCode = moveForm.controls['zipTo'].value;
        }

        if (type === QuoteType.Storage) {
            input.startDate = storageForm.controls['date'].value;
            input.promoCode = storageForm.controls['code'].value;
            input.originPostalCode = storageForm.controls['zipFrom'].value;
            input.storageLocation = storageForm.controls['location'].value.value;
            input.storageDuration = storageForm.controls['duration'].value.value;
        }

        if (type === QuoteType.Both) {
            input.startDate = bothForm.controls['date'].value;
            input.promoCode = bothForm.controls['code'].value;
            input.originPostalCode = bothForm.controls['zipFrom'].value;
            input.destinationPostalCode = bothForm.controls['zipTo'].value;
            input.storageLocation = bothForm.controls['location'].value.value;
            input.storageDuration = bothForm.controls['duration'].value.value;
        }

        return input;
    }
}
