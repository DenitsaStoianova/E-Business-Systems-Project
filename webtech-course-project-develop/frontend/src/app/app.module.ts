import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { AuthService } from './users/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ContinueOrderModalComponent } from './continue-order-modal/continue-order-modal.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { TemplatesComponent } from './templates/templates.component';
import {AddPeopleModalComponent} from "./add-people-modal/add-people-modal.component";
import {ShowPeopleModalComponent} from "./show-people-modal/show-people-modal.component";
import { Home2Component } from './home2/home2.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ContinueOrderModalComponent,
        HeaderBarComponent,
        WorkspacesComponent,
        DepartmentsComponent,
        TemplatesComponent,
        ProfileInfoComponent,
        CartDialogComponent,
        AddPeopleModalComponent,
        ShowPeopleModalComponent,
        Home2Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BasicAuthInterceptor,
            multi: true,
        }],
    bootstrap: [AppComponent]
})

export class AppModule {
}
