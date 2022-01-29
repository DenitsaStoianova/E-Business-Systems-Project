import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item.interface';
import { Route } from '../route.enum';
import { CartSharedServiceService } from "./cart-shared-service.service";
import { Workspace } from "../workspaces/workspace.interface";
import { User } from "../add-people-modal/user.interface";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  sampleData: Array<Workspace> = [];

  totalSum: number = 0;

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
