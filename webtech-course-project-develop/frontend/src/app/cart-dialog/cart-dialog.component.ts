import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item.interface';
import { Route } from '../route.enum';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  public sampleData = [{
    name: 'StartUp',
    imgUrl: 'startup.png',
    description: '1-2 people',
    price: 99.00,
    status: 'status'
  },
    {
      name: 'Business',
      imgUrl: 'business.png',
      description: 'Up to 5 people',
      price: 299.00,
      status: 'status'
    },
    {
      name: 'Enterprise',
      imgUrl: 'enterprise.png',
      description: 'Up to 10 people',
      price: 499.00,
      status: 'status'
    }];

  constructor(private readonly router: Router) { }

  ngOnInit() {
    return this.sampleData;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeData(data : Item) {
    // this.sampleData = this.sampleData.filter((element) => {
    //   if (element.name === data.name) {
    //     element.status = '';
    //   }
    //   return element.name !== data.name;
    // });
    // this.sampleData.next(this.tempData);
  }

  clearCart() {
    // this.sharedSerivce.clearData();
  }

  navigateToContinueOrderModal() {
    this.router.navigate([Route.ContinueOrderModal]);
  }
}
