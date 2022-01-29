import { Component, OnInit } from '@angular/core';
import {Route} from "../route.enum";
import {Router} from "@angular/router";
import { UserService } from '../users/services/user.service';
import {BOUGHT_WORKSPACE_NAME, USER_NAME_LOCAL_STORAGE_KEY} from '../constants';
import { BoughtWorkspace } from './bought-workspace.interface';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  usernameWorkspacesName = 'Username`s Workspaces'

  workspaceName: Array<string> = [];

  boughtWorkspacesInfo: Array<BoughtWorkspace> = [];

  constructor(private readonly userService: UserService, private readonly router: Router) {
    userService.userChanged$
    .subscribe(() => {
        const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
        if (userName) {
            this.usernameWorkspacesName = userName + "`s Workspaces"
        }
    });
   }

  getBoughtWorkspacesInfo(): void {
    this.userService.boughtWorkspacesNames()
            .subscribe(result => {
                if (result) {
                    for(let i = 0; i < result.length; ++i) {
                      this.boughtWorkspacesInfo[i] = result[i]
                    }
                } else {
                    alert(result);
                }
            },
                error => { alert(error.error.message); },
                () => { }
            );
  }

  ngOnInit(): void {
    this.getBoughtWorkspacesInfo()

    for(let i = 0; i < this.boughtWorkspacesInfo.length; ++i) {
      this.workspaceName[i] = this.boughtWorkspacesInfo[i].name
    }
  }

  navigateToAddPeopleModal() {
    localStorage.setItem(BOUGHT_WORKSPACE_NAME, 'name');
    this.router.navigate([Route.AddPeopleModal]);
  }

  navigateToShowPeopleModal() {
    this.router.navigate([Route.ShowPeopleModal]);
  }

  navigateToAddTemplate() {
    this.router.navigate([Route.Departments])
  }
}
