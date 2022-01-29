import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import {CartSharedServiceService} from "../cart-dialog/cart-shared-service.service";

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

    constructor(private cartSharedServiceService: CartSharedServiceService,
                private readonly router: Router) {
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
        alert('Successfully confirmed order!');
        this.cartSharedServiceService.clearData();
        this.router.navigate([Route.Departments]);
    }
}
