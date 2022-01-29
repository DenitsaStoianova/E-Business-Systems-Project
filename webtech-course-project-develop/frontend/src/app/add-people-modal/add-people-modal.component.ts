import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "./user.interface";
import {UserService} from "../users/services/user.service";
import {Route} from "../route.enum";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BOUGHT_WORKSPACE_NAME} from "../constants";

@Component({
    selector: 'app-add-people-modal',
    templateUrl: './add-people-modal.component.html',
    styleUrls: ['./add-people-modal.component.css']
})
export class AddPeopleModalComponent implements OnInit {
    searchText = '';

    step: number = 1;

    users: User[] = [];

    members: Array<string> = [];

    constructor(private readonly httpClient: HttpClient,
                private readonly userService: UserService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        this.userService.getAllUsers()
            .subscribe((user: User) => {
                this.users = [...this.users, user];
            });
    }

    submit(): void {
        this.step++;
    }

    previous(): void {
        this.step--;
    }

    onSelectUser(user: User): void {
        this.members.push(user.email);
    }

    onDeleteMember(member: string): void {
        this.members.forEach((user: string, index: number) => {
            if (user === member) {
                this.members.splice(index, 1);
            }
        });
    }

    addMembersToWorkspace() {
        const workspaceName = localStorage.getItem(BOUGHT_WORKSPACE_NAME);
        const dbMembers = this.members;
        this.httpClient.post(environment.serveUrl + '/boughtWorkspaces/addMember', { workspaceName, dbMembers })
        this.router.navigate([Route.ProfileInfo]);
        localStorage.removeItem(BOUGHT_WORKSPACE_NAME);
    }
}
