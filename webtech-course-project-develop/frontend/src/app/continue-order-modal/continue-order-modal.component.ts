import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';

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

    constructor(private readonly router: Router) {
    }

    ngOnInit(): void {

    }

    submit(): void {
        this.step++;
    }

    previous(): void {
        this.step--;
    }

    onCreateChatroom(): void {
        alert('Successfully confirmed order!');
        this.router.navigate([Route.Home]);
    }
}
