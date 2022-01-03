import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import { User } from './user.interface';

@Component({
    selector: 'continue-order-modal',
    templateUrl: './continue-order-modal.component.html',
    styleUrls: ['./continue-order-modal.component.css']
})
export class ContinueOrderModalComponent implements OnInit {
    searchText = '';

    step: number = 1;

    chatroomName: string = '';

    chatroomDescription: string = '';

    users: User[] = [];

    members: User[] = [];

    constructor(private readonly router: Router) {
    }

    ngOnInit(): void {

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

    onCreateChatroom(): void {
        this.router.navigate([Route.Chatroom]);
    }
}
