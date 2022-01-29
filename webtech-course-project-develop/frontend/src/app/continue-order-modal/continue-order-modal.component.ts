import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import {CartSharedWorkspacesService} from "../cart-dialog/cart-shared-workspaces.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Template} from "../../interfaces/template.interface";
import {BoughtWorkspace} from "../profile-info/bought-workspace.interface";

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
        let workspacesData = this.cartSharedServiceService.getDataToFinishOrder();
        if (workspacesData.length > 0) {
            for (let i = 0; i < workspacesData.length; i++) {
                const templatesArr: Array<Template> = [];
                this.httpClient.post<BoughtWorkspace>(environment.serveUrl + '/boughtWorkspaces',
                    { name: workspacesData[i].type,
                        department: '',
                        maxPeople: workspacesData[i].maxPeople,
                        userEmails: [""],
                        templates: templatesArr }).subscribe();
            }
        } else {
            // SEND POST REQUEST TO DATABASE TO ADD TEMPLATE TO WORKSPACE - BOUGHT WORKSPACE IS ASSOCIATED WITH DEPARTMENT
        }

        alert('Successfully confirmed order!');
        this.cartSharedServiceService.clearData();
        this.router.navigate([Route.UserHome]);
    }
}
