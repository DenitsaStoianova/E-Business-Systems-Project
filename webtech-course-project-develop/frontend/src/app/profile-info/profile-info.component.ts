import { Component, OnInit } from '@angular/core';
import { Route } from "../route.enum";
import { Router } from "@angular/router";
import { UserService } from '../users/services/user.service';
import {BOUGHT_WORKSPACE_NAME, USER_NAME_LOCAL_STORAGE_KEY, USER_WORKSPACE_NAME_BUY_TEMPLATE} from '../constants';
import { BoughtWorkspace } from './bought-workspace.interface';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Template} from "../../interfaces/template.interface";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  usernameWorkspacesName = 'Username`s Workspaces'

  usernameLocalStorage = ''

  boughtWorkspacesInfo: Array<BoughtWorkspace> = [];

  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly httpClient: HttpClient) {
    userService.userChanged$
        .subscribe(() => {
          const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
          if (userName) {
            this.usernameWorkspacesName = userName + "`s workspaces"
            this.usernameLocalStorage = userName;
          }
        });
  }

  ngOnInit(): void {
    this.httpClient.get<Array<BoughtWorkspace>>(environment.serveUrl +'/boughtWorkspaces')
        .subscribe((template: Array<BoughtWorkspace>) => {
          for (let i = 0; i < template.length; ++i) {
            if(template[i].ownerName == this.usernameLocalStorage) {
              this.boughtWorkspacesInfo[i] = template[i];
            }
          }
        });

    this.httpClient.get<Array<Template>>(environment.serveUrl + '/templates').subscribe(
        (template: Array<Template>) => {
          // console.log(template);
          // console.log(this.boughtWorkspacesInfo);
          for (let i = 0; i < this.boughtWorkspacesInfo.length; ++i) {
          //  console.log(this.boughtWorkspacesInfo[i]);

              var arrayTemplates: Array<Template> = [];
            for (let j = 0; j < template.length; j++) {

              if (this.boughtWorkspacesInfo[i].boughtType == template[j].boughtWorkspaceType) {
               // console.log(template[j]);
                  arrayTemplates.push(template[i]);
              //  this.boughtWorkspacesInfo[i].templates.push(template[j]);
              }
             //   console.log('f' + this.boughtWorkspacesInfo[i].templates.length)
            }
              this.boughtWorkspacesInfo[i].templates = arrayTemplates;
          }
        }
    );
  }

  navigateToAddPeopleModal(workspaceName: string) {
    localStorage.setItem(BOUGHT_WORKSPACE_NAME, workspaceName);
    this.router.navigate([Route.AddPeopleModal]);
  }

  navigateToShowPeopleModal(workspaceName: string) {
    localStorage.setItem(BOUGHT_WORKSPACE_NAME, workspaceName);
    this.router.navigate([Route.ShowPeopleModal]);
  }

  navigateToAddTemplate(workspaceName: string) {
    localStorage.setItem(USER_WORKSPACE_NAME_BUY_TEMPLATE, workspaceName);
    this.router.navigate([Route.Departments]);
  }
}
