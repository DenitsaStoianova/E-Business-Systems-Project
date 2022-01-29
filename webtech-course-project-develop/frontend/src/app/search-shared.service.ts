import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SearchSharedService {
    private isTemplate: boolean = false;
 
    addItem(isTempl: boolean) {
        this.isTemplate = isTempl
    }
 
    getItems(): boolean {
        return this.isTemplate;
    }
}