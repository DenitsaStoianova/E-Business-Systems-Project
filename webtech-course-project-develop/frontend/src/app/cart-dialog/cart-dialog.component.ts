import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item.interface';
import { Route } from '../route.enum';
import {CartSharedServiceService} from "./cart-shared-service.service";
import {Workspace} from "../workspaces/workspace.interface";
import {User} from "../add-people-modal/user.interface";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  // public sampleData = [{
  //   name: 'StartUp',
  //   imgUrl: 'startup.png',
  //   description: '1-2 people',
  //   price: 99.00,
  //   status: 'status'
  // },
  // {
  //   name: 'Business',
  //   imgUrl: 'business.png',
  //   description: 'Up to 5 people',
  //   price: 299.00,
  //   status: 'status'
  // },
  // {
  //   name: 'Enterprise',
  //   imgUrl: 'enterprise.png',
  //   description: 'Up to 10 people',
  //   price: 499.00,
  //   status: 'status'
  // }];

  sampleData : Array<Workspace> = [];

  totalSum : number = 0;

  constructor(private cartSharedServiceService: CartSharedServiceService,
              private readonly router: Router) { }

  ngOnInit() {
    this.cartSharedServiceService.getItemData().subscribe(res => {
      this.sampleData = res;
    })
    // this.sampleData.forEach((workspace: Workspace) => {
    //  this.totalSum += workspace.price;
    // });
  }

  removeData(data: Workspace) {
    this.cartSharedServiceService.deleteWorkspaceData(data);
  }

  clearCart() {
    this.cartSharedServiceService.clearData();
  }

  navigateToContinueOrderModal() {
    this.router.navigate([Route.ContinueOrderModal]);
  }
}
