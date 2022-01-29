import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class HeaderBarService {
    private dataTransfer = new BehaviorSubject<any>({
        type: "",
        description: "",
        category: "",
        image: "",
        link: "",
        price: "",
        status: ""
    });

    public getDataTransfer(): any {
        return this.dataTransfer.asObservable();
    }

    public setDataTransfer(currentData: any): void {
        if(!!currentData) {
            const newDataTransfer = {
                type: currentData.type,
                description: currentData.description,
                category: currentData.category,
                image: currentData.image,
                link: currentData.link,
                price: currentData.price,
                status: currentData.status
            };
            this.dataTransfer.next(newDataTransfer);
        }
    }

}