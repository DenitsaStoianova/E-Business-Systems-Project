import { Component, OnInit } from '@angular/core';
import { CATEGORY_NAME } from "../constants";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Template } from 'src/interfaces/template.interface';
import { CartSharedTemplatesService } from '../cart-dialog/cart-shared-templates.service';
import { HeaderBarService } from '../header-bar/header-bar.service';
import { Router } from '@angular/router';
``
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  categoryTemplate: string = 'Template`s category'

  templates: Array<Template> = [];

  categoryTemplateName: string = '';

  constructor(
    private headerBarService: HeaderBarService,
    private cartTemplateService: CartSharedTemplatesService, 
    private readonly httpClient: HttpClient,
    private readonly router: Router) {
    // @ts-ignore
    this.categoryTemplate = localStorage.getItem(CATEGORY_NAME) + ' category';
    // @ts-ignore
      this.categoryTemplateName = localStorage.getItem(CATEGORY_NAME);
  }

  ngOnInit() {
    this.httpClient.get<Array<Template>>(environment.serveUrl + '/templates').subscribe(
      (template: Array<Template>) => {
        for (let i = 0; i < template.length; ++i) {
            if (template[i].category == this.categoryTemplateName) {
                console.log(template[i]);
                this.templates[i] = template[i]
            }
        }
      }
    );

   this.headerBarService.getDataTransfer().subscribe( currentData => {
      this.templates = [];
      this.templates[0] = currentData;
   });
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
