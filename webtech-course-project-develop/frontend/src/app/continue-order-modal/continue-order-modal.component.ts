import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import { CartSharedWorkspacesService } from "../cart-dialog/cart-shared-workspaces.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Template } from "../../interfaces/template.interface";
import { BoughtWorkspace } from "../profile-info/bought-workspace.interface";
import {BOUGHT_WORKSPACE_NAME, CATEGORY_NAME, USER_NAME_LOCAL_STORAGE_KEY} from "../constants";
import {CartSharedTemplatesService} from "../cart-dialog/cart-shared-templates.service";

@Component({
    selector: 'app-continue-order-modal',
    templateUrl: './continue-order-modal.component.html',
    styleUrls: ['./continue-order-modal.component.css']
})
export class ContinueOrderModalComponent implements OnInit {
    step: number = 1;

    userName: string = '';

    cardCVV: string = '';

    cardNumber: string = '';

    expiryDate: string = '';

    cardSecret: string = '';

    constructor(private cartSharedServiceService: CartSharedWorkspacesService,
        private cartSharedTemplatesService: CartSharedTemplatesService,
        private readonly router: Router,
        private readonly httpClient: HttpClient) {
    }

    ngOnInit(): void {

    }

    submit(): void {
        const userName: string = this.userName.trim();
        const cardCVV: string = this.cardCVV.trim();
        const cardNumber: string = this.cardNumber.trim();
        const expiryDate: string = this.expiryDate.trim();

        if(this.step === 1) {
            if(userName === '') {
                alert('Please, fill your name');
                return;
            }
        }

        if(this.step === 2) {
            //CVV
            if(cardCVV === '' || cardCVV.length !== 3) {
                alert('Please, fill your CVV number');
                return;
            }
        }

        if(this.step === 3) {
            if(cardNumber === '' || cardNumber.length !== 16) {
                alert('Please, fill your card number');
                return;
            }

            this.cardSecret = this.cardNumber.substring(0, 4) + 'XXXXXXXX' + this.cardNumber.substring(12, 16);
        }

        if(this.step === 4) {
            if(expiryDate === '') {
                alert('Please, fill the date of expire card');
                return;
            }
        }

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
                        boughtType: workspacesData[i].type,
                        ownerName: usernameLocalStorage,
                        department: '',
                        maxPeople: workspacesData[i].maxPeople,
                        userEmails: [""],
                        templates: templatesArr }).subscribe();
            }
        } else {
            // SEND POST REQUEST TO DATABASE TO ADD TEMPLATE TO WORKSPACE - BOUGHT WORKSPACE IS ASSOCIATED WITH DEPARTMENT
            const workspaceNameLocalStorage = localStorage.getItem(CATEGORY_NAME);
            console.log(workspaceNameLocalStorage);
            let templatesData = this.cartSharedTemplatesService.getDataToFinishOrder();
            this.httpClient.post<any>(environment.serveUrl + '/templates',  this.cartSharedTemplatesService.getDataToFinishOrder()).subscribe();
            for (let i = 0; i < templatesData.length; i++) {
                this.httpClient.post<any>(environment.serveUrl + '/boughtWorkspaces/addBoughtTemplateToWorkspace',
                    {
                        boughtType: workspaceNameLocalStorage,
                        type: templatesData[i].type,
                        description: templatesData[i].description,
                        category: templatesData[i].category,
                        image: templatesData[i].image,
                        link: templatesData[i].link,
                        price: templatesData[i].price
                    }).subscribe();
            }
        }

        alert('Successfully confirmed order!');
        this.cartSharedServiceService.clearData();
        this.router.navigate([Route.Departments]);
    }
}
