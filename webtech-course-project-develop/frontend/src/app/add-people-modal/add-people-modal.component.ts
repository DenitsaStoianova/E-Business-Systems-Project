import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "./user.interface";
import {UserService} from "../users/services/user.service";
import {Route} from "../route.enum";

@Component({
    selector: 'app-add-people-modal',
    templateUrl: './add-people-modal.component.html',
    styleUrls: ['./add-people-modal.component.css']
})
export class AddPeopleModalComponent implements OnInit {
    searchText = '';

    step: number = 1;

    users: User[] = [];

    members: User[] = [];

    constructor(private readonly userService: UserService,
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
        this.members = [...this.members, user];
    }

    onDeleteMember(member: User): void {
        this.members.forEach((user: User, index: number) => {
            if (user.email === member.email) {
                this.members.splice(index, 1);
            }
        });
    }

    navigateToProfileInfo() {
        this.router.navigate([Route.ProfileInfo]);
    }
}
