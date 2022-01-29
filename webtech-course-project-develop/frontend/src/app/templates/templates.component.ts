import { Component, OnInit } from '@angular/core';
import {CATEGORY_NAME} from "../constants";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  categoryTemplate: string = 'Template`s category'

  public sampleData = [{
    name: 'Template1',
    imgUrl: '90-day plan.png',
    description: '',
    price: 99.00,
    status: ''
  },
  {
    name: 'Template2',
    imgUrl: '90-day plan.png',
    description: '',
    price: 299.00,
    status: ''
  },
  {
    name: 'Template3',
    imgUrl: '90-day plan.png',
    description: '',
    price: 499.00,
    status: ''
  }];

   constructor() {
     // @ts-ignore
     this.categoryTemplate = localStorage.getItem(CATEGORY_NAME) + ' Category';
     localStorage.removeItem(CATEGORY_NAME);
   }

  ngOnInit() {
  }

  addItems(data: { status: string; }) {
    // eslint-disable-next-line no-param-reassign
    data.status = 'IN CART'; // appending a new key status
    //  this.sharedSerivce.setItemData(data);
  }

  openDoc(pdfUrl: string, startPage: number) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
  }
}
