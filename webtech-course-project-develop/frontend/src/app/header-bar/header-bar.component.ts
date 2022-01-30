import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/services/user.service';
import { Route } from '../route.enum';
import { NO_USER_LOGGED_IN_MESSAGE, USER_NAME_LOCAL_STORAGE_KEY } from '../constants';
import { CartSharedWorkspacesService } from "../cart-dialog/cart-shared-workspaces.service";
import { Workspace } from "../workspaces/workspace.interface";
import { environment } from 'src/environments/environment';
import { Template } from 'src/interfaces/template.interface';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HeaderBarService } from './header-bar.service';

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

    searchTerm: string = "";

    templates: Array<Template> = [];
    
    term: string = "";

    isTemplateWindow: boolean = true;


    constructor(
        private headerBarService: HeaderBarService,
        private cartSharedServiceService: CartSharedWorkspacesService,
        private readonly userService: UserService,
        private readonly router: Router,
        private http: HttpClient) {
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
        this.http.get<Array<Template>>(environment.serveUrl +'/templates')
        .subscribe((data: Array<Template>) => {
          this.templates = data;
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

    getSearchResult(template) {
        let templateName = template.target.value;
        for(let i = 0; i < this.templates.length; ++i) {
            if(templateName === this.templates[i].type) {
                
                this.headerBarService.setDataTransfer(this.templates[i]);
                this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() =>{
                    this.router.navigate(['templates']);
                  });
            }
        }
    }
}
