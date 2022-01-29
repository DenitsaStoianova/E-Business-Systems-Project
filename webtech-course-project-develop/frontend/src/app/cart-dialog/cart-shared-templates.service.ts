import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Template } from 'src/interfaces/template.interface';

@Injectable({
    providedIn: 'root'
})
export class CartSharedTemplatesService {
    tempTemplates : Array<Template> = [];
    private sampleTemplate = new BehaviorSubject<Array<Template>>([]);
    sampleData$ = this.sampleTemplate.asObservable();
    constructor() { }

    status : string = '';

    setTemplate(template) {
        if (this.tempTemplates.some(obj => obj.name === template.name)) {
            alert('Template is already in the cart.');
        } else {
            console.log(this.tempTemplates);
            this.tempTemplates.push(template);
            this.sampleTemplate.next(this.tempTemplates);
        }
    }

    getItemData() {
        return this.sampleData$;
    }

    getDataToFinishOrder() {
        return this.tempTemplates;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    deleteTemplateData(data) {
        this.tempTemplates = this.tempTemplates.filter(element => {
            if (element.name === data.name) {
                element.status = '';
            }
            return element.name !== data.name;
        });
        this.sampleTemplate.next(this.tempTemplates);
    }

    clearData() {
        this.tempTemplates.forEach(element => {
            element.status = '';
        });
        this.tempTemplates = [];
        this.sampleTemplate.next(this.tempTemplates);
    }
}