import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import { CartSharedWorkspacesService } from "../cart-dialog/cart-shared-workspaces.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Template } from "../../interfaces/template.interface";
import { BoughtWorkspace } from "../profile-info/bought-workspace.interface";
import {USER_NAME_LOCAL_STORAGE_KEY} from "../constants";
import {CartSharedTemplatesService} from "../cart-dialog/cart-shared-templates.service";

@Component({
    selector: 'app-continue-order-modal',
    templateUrl: './continue-order-modal.component.html',
    styleUrls: ['./continue-order-modal.component.css']
})
export class ContinueOrderModalComponent implements OnInit {
    step: number = 1;

    userName: string = '';

    bankName: string = '';

    cardNumber: string = '';

    expiryDate: string = '';

    constructor(private cartSharedServiceService: CartSharedWorkspacesService,
        private cartSharedTemplatesService: CartSharedTemplatesService,
        private readonly router: Router,
        private readonly httpClient: HttpClient) {
    }

    ngOnInit(): void {

    }

    submit(): void {
        this.step++;
    }

    previous(): void {
        this.step--;
    }

    onFinishOrder(): void {
        // add to bought workspaces to database with post request to bought workspaces
        // buy workspace == create new one in profile-info
        const usernameLocalStorage = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
        let workspacesData = this.cartSharedServiceService.getDataToFinishOrder();
        if (workspacesData.length > 0) {
            // var  boughtArray: Array<BoughtWorkspace> = [];
            // for (let i = 0; i < workspacesData.length; i++) {
            //     var boughtWorkspace: BoughtWorkspace = {
            //         type: workspacesData[i].type,
            //         department: '',
            //         maxPeople: workspacesData[i].maxPeople,
            //         usersEmails: [],
            //         templates: []
            //     };
            //     boughtArray.push(boughtWorkspace);
            // }
            // this.httpClient.post<any>(environment.serveUrl + '/boughtWorkspaces/addBoughtWorkspace',
            //     {name: usernameLocalStorage, boughtArray}).subscribe();

            for (let i = 0; i < workspacesData.length; i++) {
                const templatesArr: Array<Template> = [];
                this.httpClient.post<any>(environment.serveUrl + '/boughtWorkspaces',
                    {
                        name: usernameLocalStorage,
                        type: workspacesData[i].type,
                        ownerName: usernameLocalStorage,
                        department: '',
                        maxPeople: workspacesData[i].maxPeople,
                        userEmails: [""],
                        templates: templatesArr }).subscribe();
            }
        } else {
            // SEND POST REQUEST TO DATABASE TO ADD TEMPLATE TO WORKSPACE - BOUGHT WORKSPACE IS ASSOCIATED WITH DEPARTMENT
            let templatesData = this.cartSharedTemplatesService.getDataToFinishOrder();
            for (let i = 0; i < templatesData.length; i++) {

            }
        }

        alert('Successfully confirmed order!');
        this.cartSharedServiceService.clearData();
        this.router.navigate([Route.Departments]);
    }
}
