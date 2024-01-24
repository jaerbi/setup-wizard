import { RadioListModel } from "src/app/shared/radio-list/radio-list.model";
import { SelectModel } from "src/app/shared/select/select.model";
import { StorageDuration, StorageLocation } from "src/shared/service-proxies/common-service-proxies";

export class StartStoreDictionaryService {

    public readonly storageLocation: RadioListModel[] = [
        new RadioListModel('My location', StorageLocation.OnSite),
        new RadioListModel('A secure CEND warehouse', StorageLocation.Warehouse),
    ];
    public readonly storageDuration: SelectModel[] = [
        new SelectModel('Less than 3 months', StorageDuration.LessThree),
        new SelectModel('3 to 6 months', StorageDuration.ThreeToSix),
        new SelectModel('6 to 12 months', StorageDuration.SixToTwelve),
        new SelectModel('More than 12 months', StorageDuration.MoreTwelve),
    ];
    
}
