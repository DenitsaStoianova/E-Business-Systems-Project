import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item.interface';
import { Route } from '../route.enum';
import { CartSharedWorkspacesService } from "./cart-shared-workspaces.service";
import { Workspace } from "../workspaces/workspace.interface";
import { User } from "../add-people-modal/user.interface";
import { Template } from 'src/interfaces/template.interface';
import { CartSharedTemplatesService } from './cart-shared-templates.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  sampleData: Array<Workspace | Template> = [];

  totalSum: number = 0;

  constructor(private cartSharedServiceService: CartSharedWorkspacesService, private cartTemplateSharedServiceService: CartSharedTemplatesService,
    private readonly router: Router) { }

  ngOnInit() {
    // this.cartSharedServiceService.getItemData().subscribe(res => {
    //   this.sampleData = res;
    // })

    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.getItemData().subscribe(res => {
        this.sampleData = res;
      })
    } else {
      this.cartTemplateSharedServiceService.getItemData().subscribe(res => {
        this.sampleData = res;
      })
    }

    // this.sampleData.forEach((workspace: Workspace) => {
    //  this.totalSum += workspace.price;
    // });
  }

  removeData(data: Workspace | Template) {
    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.deleteWorkspaceData(data);
    } else {
      this.cartTemplateSharedServiceService.deleteTemplateData(data);
    }
  }

  clearCart() {
    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.clearData();
    } else {
      this.cartTemplateSharedServiceService.clearData();
    }
  }

  navigateToContinueOrderModal() {
    this.router.navigate([Route.ContinueOrderModal]);
  }
}
