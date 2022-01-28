import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../add-people-modal/user.interface";
import {Workspace} from "./workspace.interface";
import {CartSharedServiceService} from "../cart-dialog/cart-shared-service.service";
//import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {
  public sampleData = [{
    type: 'StartUp',
    imgUrl: 'startup.png',
    description: '1-2 people',
    price: 99.00,
    status: ''
  },
    {
      type: 'Business',
      imgUrl: 'business.png',
      description: 'Up to 5 people',
      price: 299.00,
      status: ''
    },
    {
      type: 'Enterprise',
      imgUrl: 'enterprise.png',
      description: 'Up to 10 people',
      price: 499.00,
      status: ''
    }];

  workspaces: Workspace[] = [];

  workspaceStatus : string = '';

  constructor(private cartSharedServiceService: CartSharedServiceService,
              private readonly httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<Workspace>(environment.serveUrl + '/workspaces').subscribe(
        (workspace: Workspace) => {
          this.workspaces = [...this.workspaces, workspace];
        });
  }

  addItems(data: { status: string; }) {
    // eslint-disable-next-line no-param-reassign
    data.status = 'IN CART'; // appending a new key status
   // this.workspaceStatus = 'IN CART';
    this.cartSharedServiceService.setWorkspace(data);
  }
}
