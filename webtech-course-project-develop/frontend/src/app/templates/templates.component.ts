import { Component, OnInit } from '@angular/core';
import {CATEGORY_NAME} from "../constants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Template } from 'src/interfaces/template.interface';
import { CartSharedTemplatesService } from '../cart-dialog/cart-shared-templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  categoryTemplate: string = 'Template`s category'

  templates: Array<Template> = [];

  constructor(private cartTemplateService: CartSharedTemplatesService, private readonly httpClient: HttpClient) {
    // @ts-ignore
    this.categoryTemplate = localStorage.getItem(CATEGORY_NAME) + ' Category';
    localStorage.removeItem(CATEGORY_NAME);
  }

  ngOnInit() {
    this.httpClient.get<Array<Template>>(environment.serveUrl + '/templates').subscribe(
         (template: Array<Template>)=>{
            for(let i = 0; i < template.length; ++i) {
              this.templates[i] = template[i]
            }
         }
    );
  }

  addItems(data: { status: string; }) {
    // eslint-disable-next-line no-param-reassign
    data.status = 'IN CART'; // appending a new key status
    //  this.sharedSerivce.setItemData(data);
    this.cartTemplateService.setTemplate(data);
  }

  openDoc(pdfUrl: string, startPage: number) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
  }
}
