import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Route} from "../route.enum";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BOUGHT_WORKSPACE_NAME, USER_NAME_LOCAL_STORAGE_KEY} from "../constants";
import {BoughtWorkspace} from "../profile-info/bought-workspace.interface";

@Component({
    selector: 'app-show-people-modal',
    templateUrl: './show-people-modal.component.html',
    styleUrls: ['./show-people-modal.component.css']
})
export class ShowPeopleModalComponent implements OnInit {
    searchText = '';

    users: Array<string> = [];

    constructor(private readonly httpClient: HttpClient,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        const owner = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
        const workspaceName = localStorage.getItem(BOUGHT_WORKSPACE_NAME);
        this.httpClient.get<Array<BoughtWorkspace>>(environment.serveUrl +'/boughtWorkspaces')
            .subscribe((template: Array<BoughtWorkspace>) => {
                for (let i = 0; i < template.length; ++i) {
                    if (template[i].ownerName == owner && template[i].type == workspaceName) {
                        console.log(this.users);
                        this.users = template[i].usersEmails;
                        console.log(this.users);
                    }
                }
            });
    }

    navigateToProfileInfo() {
        localStorage.removeItem(BOUGHT_WORKSPACE_NAME);
        this.router.navigate([Route.ProfileInfo]);
    }
}
