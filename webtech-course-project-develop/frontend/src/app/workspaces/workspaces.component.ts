import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Workspace } from "./workspace.interface";
import { CartSharedWorkspacesService } from "../cart-dialog/cart-shared-workspaces.service";

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {

  workspaces: Array<Workspace> = [];

  constructor(private cartSharedServiceService: CartSharedWorkspacesService,
    private readonly httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<Array<Workspace>>(environment.serveUrl + '/workspaces').subscribe(
      (workspace: Array<Workspace>) => {
        for (let i = 0; i < workspace.length; ++i) {
          this.workspaces[i] = workspace[i];
        }
      }
    );
  }

  addItems(data: { status: string; }) {
    // eslint-disable-next-line no-param-reassign
    data.status = 'IN CART'; // appending a new key status
    // this.workspaceStatus = 'IN CART';
    console.log(data);
    this.cartSharedServiceService.setWorkspace(data);
  }
}
