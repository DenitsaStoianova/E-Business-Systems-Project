import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Workspace} from "../workspaces/workspace.interface";

@Injectable({
    providedIn: 'root'
})
export class CartSharedServiceService {
    tempWorkspace : Workspace[] = [];
    private sampleWorkspace = new BehaviorSubject<Workspace[]>([]);
    sampleData$ = this.sampleWorkspace.asObservable();
    constructor() { }

    status : string = '';

    setWorkspace(workspace) {
        if (this.tempWorkspace.some(obj => obj.type === workspace.type)) {
            alert('Workspace is already in the cart.');
        } else {
            console.log(this.tempWorkspace);
            this.tempWorkspace.push(workspace);
            this.sampleWorkspace.next(this.tempWorkspace);
        }
    }

    // setItemData(data) {
    //     if (this.tempWorkspace.some(obj => obj.type === data.type)) {
    //         alert('Item is already in the cart.');
    //     } else {
    //         this.tempWorkspace.push(data);
    //         this.sampleWorkspace.next(this.tempWorkspace);
    //     }
    // }

    getItemData() {
        return this.sampleData$;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    deleteWorkspaceData(data) {
        this.tempWorkspace = this.tempWorkspace.filter(element => {
            if (element.type === data.type) {
                element.status = '';
            }
            return element.type !== data.type;
        });
        this.sampleWorkspace.next(this.tempWorkspace);
    }

    clearData() {
        this.tempWorkspace.forEach(element => {
            element.status = '';
        });
        this.tempWorkspace = [];
        this.sampleWorkspace.next(this.tempWorkspace);
    }
}
