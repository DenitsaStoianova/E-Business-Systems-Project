import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/services/user.service';
import { Route } from '../route.enum';
import { NO_USER_LOGGED_IN_MESSAGE, USER_NAME_LOCAL_STORAGE_KEY } from '../constants';
import { CartSharedServiceService } from "../cart-dialog/cart-shared-service.service";
import { Workspace } from "../workspaces/workspace.interface";

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
    searchText = '';

    sampleData: Workspace[] = [];

    cartBoolean = false;

    headerMessage: string = NO_USER_LOGGED_IN_MESSAGE;

    userLoggedIn: boolean = false;

    constructor(private cartSharedServiceService: CartSharedServiceService,
        private readonly userService: UserService,
        private readonly router: Router) {
        userService.userChanged$
            .subscribe(() => {
                const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
                if (userName) {
                    this.headerMessage = `Hello, ${userName}!`;
                    this.userLoggedIn = true;
                } else {
                    this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
                    this.userLoggedIn = false;
                }
            });
    }

    ngOnInit() {
        this.cartSharedServiceService.getItemData().subscribe(res => {
            this.sampleData = res;
        });

    }

    onLogOutButtonClick(): void {
        this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
        this.userLoggedIn = false;
        this.userService.logOut();
        this.router.navigate([Route.Home]);
    }

    navigateToUserHomePage() {
        this.router.navigate([Route.UserHome]);
    }

    navigateToProfileInfo() {
        this.router.navigate([Route.ProfileInfo]);
    }

    cartClicked() {
        this.cartBoolean = !this.cartBoolean;
    }
}
