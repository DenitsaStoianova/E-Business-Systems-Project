import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "./user.interface";
import {UserService} from "../users/services/user.service";
import {Route} from "../route.enum";

@Component({
    selector: 'show-people-modal',
    templateUrl: './show-people-modal.component.html',
    styleUrls: ['./show-people-modal.component.css']
})
export class ShowPeopleModalComponent implements OnInit {

    members: User[] = [];

    constructor(private readonly userService: UserService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        this.userService.getAllUsers()
            .subscribe((user: User) => {
                this.members = [...this.members, user];
            });
    }

    navigateToProfileInfo() {
        this.router.navigate([Route.ProfileInfo]);
    }
}
