// import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { User } from '../user.interface';
import { EXPIRES_AT_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY, USER_NAME_LOCAL_STORAGE_KEY } from '../../constants';
import { environment } from 'src/environments/environment';
import { BoughtWorkspace } from 'src/app/profile-info/bought-workspace.interface';
import { Template } from 'src/interfaces/template.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly userChangedSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    readonly userChanged$: Observable<boolean> = this.userChangedSource.asObservable();

    constructor(private readonly httpClient: HttpClient) {
    }

    getAllUsers(): Observable<User> {
        return this.httpClient.get<User>(environment.serveUrl +'/users');
    }

    login(email: string, password: string): Observable<User> {
        const loginUserObservable = this.httpClient.post(environment.serveUrl + '/user/login', { email, password }) as Observable<User>;

        return loginUserObservable
            .pipe(
                tap((user: User) => this.saveCurrentUser(user)),
                take(1)
            );
    }

    register(name: string, email: string, password: string): Observable<User> {
        const registerUserObservable = this.httpClient.post(environment.serveUrl + '/user', {
            name,
            email,
            password
        }) as Observable<User>;

        return registerUserObservable
            .pipe(
                tap((user: User) => this.saveCurrentUser(user)),
                take(1)
            );
    }

    boughtWorkspacesNames(): Observable<Array<BoughtWorkspace>> {
        return this.httpClient.get<Array<BoughtWorkspace>>(environment.serveUrl +'/boughtWorkspaces');
    }

    isLoggedIn(): boolean {
        const expiration: string | null = localStorage.getItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
        if (!expiration) {
            return false;
        }
        const expiresAt: moment.Moment = moment(JSON.parse(expiration));
        return moment().isBefore(expiresAt);
    }

    logOut(): void {
        localStorage.removeItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        localStorage.removeItem(USER_NAME_LOCAL_STORAGE_KEY);
        this.userChangedSource.next(false);
    }

    getFormControlErrorMessage(formControl: FormControl): string {
        if (formControl.hasError('required')) {
            return 'You must enter a value';
        }
        if (formControl.hasError('minlength')) {
            return 'Field must contain at least 8 symbols';
        }

        return '';
    }

    private saveCurrentUser(user: User): void {
        const expiresAt: moment.Moment = moment().add(user.expiresIn, 'second');
        localStorage.setItem(EXPIRES_AT_LOCAL_STORAGE_KEY, JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, user.token);
        localStorage.setItem(USER_NAME_LOCAL_STORAGE_KEY, user.name);
        this.userChangedSource.next(true);
    }

    load() {
        return this.httpClient.get<any>(environment.serveUrl + "/user");
    }

    setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }
}
