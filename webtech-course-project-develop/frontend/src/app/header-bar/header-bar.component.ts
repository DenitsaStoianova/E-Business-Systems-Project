import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/services/user.service';
import { Route } from '../route.enum';
import { NO_USER_LOGGED_IN_MESSAGE, USER_NAME_LOCAL_STORAGE_KEY } from '../constants';

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
    searchText = '';

    sampleData = [];

    cartBoolean = false;

    headerMessage: string = NO_USER_LOGGED_IN_MESSAGE;

    userLoggedIn: boolean = false;

    constructor(private readonly userService: UserService,
        private readonly router: Router) {
        userService.userChanged$
            .subscribe(() => {
                const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
                if (userName) {
                    this.headerMessage = `Hello,: ${userName}!`;
                    this.userLoggedIn = true;
                } else {
                    this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
                    this.userLoggedIn = false;
                }
            });
    }

    onLogOutButtonClick(): void {
        this.headerMessage = NO_USER_LOGGED_IN_MESSAGE;
        this.userLoggedIn = false;
        this.userService.logOut();
        this.router.navigate([Route.Home]);
    }

    navigateToHome2Page() {
        this.router.navigate([Route.Home2]);
    }

    navigateToProfileInfo() {
        this.router.navigate([Route.ProfileInfo]);
    }

    cartClicked() {
        this.cartBoolean = !this.cartBoolean;
    }
}
