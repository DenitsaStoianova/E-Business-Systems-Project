import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  totalSumString: string = '0.00';

  convertedPrice: number = 0;


  constructor(private cartSharedServiceService: CartSharedWorkspacesService, 
    private cartTemplateSharedServiceService: CartSharedTemplatesService,
    private readonly router: Router) { }

  ngOnInit() {
    // this.cartSharedServiceService.getItemData().subscribe(res => {
    //   this.sampleData = res;
    // })

    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.getItemData().subscribe(res => {

        this.sampleData = res;
        this.totalSum = 0;
        this.convertedPrice = 0;
        this.sampleData.forEach((item: Workspace | Template) => {
          this.convertedPrice = +item.price.substring(1);
           console.log(this.convertedPrice);
           this.totalSum += this.convertedPrice;
          });
          if(this.totalSum>0) this.totalSumString = '$' + this.totalSum + '.00'
          else this.totalSumString = '0.00';
      })
    } else {
      this.cartTemplateSharedServiceService.getItemData().subscribe(res => {
        this.sampleData = res;
        this.totalSum = 0;
        this.convertedPrice = 0;
        this.sampleData.forEach((item: Workspace | Template) => {
          this.convertedPrice = +item.price.substring(1);
           console.log(this.convertedPrice);
           this.totalSum += this.convertedPrice;
          });
          if(this.totalSum>0) this.totalSumString = '$' + this.totalSum + '.00'
          else this.totalSumString = '0.00';
      })
    }


     
  }

  removeData(data: Workspace | Template) {
    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.deleteWorkspaceData(data);
    } else {
      this.cartTemplateSharedServiceService.deleteTemplateData(data);
    }

    this.totalSum = 0;
    this.convertedPrice = 0;

     this.sampleData.forEach((item: Workspace | Template) => {
      this.convertedPrice = +item.price.substring(1);
      console.log(this.convertedPrice);
      this.totalSum += this.convertedPrice;
     });
     if(this.totalSum>0) this.totalSumString = '$' + this.totalSum + '.00'
     else this.totalSumString = '0.00';
  }

  clearCart() {
    if (this.cartSharedServiceService.getDataToFinishOrder().length > 0) {
      this.cartSharedServiceService.clearData();
    } else {
      this.cartTemplateSharedServiceService.clearData();
    }
    this.totalSum = 0;
    this.totalSumString = '0.00';
  }

  navigateToContinueOrderModal() {
    this.router.navigate([Route.ContinueOrderModal]);
  }
}
