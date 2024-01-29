
import { FormGroup } from "@angular/forms";
import { StartFormsData } from "./start.model";

export class StartStoreService {
    public imageArrow!: string;
    public imageCalendar!: string;
    public startFormsData = new StartFormsData(new FormGroup({}), new FormGroup({}), new FormGroup({}));

    public resetData(): void {
        this.startFormsData = new StartFormsData(new FormGroup({}), new FormGroup({}), new FormGroup({}));
    }
}
