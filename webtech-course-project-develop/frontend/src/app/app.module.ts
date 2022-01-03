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
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ContinueOrderModalComponent } from './continue-order-modal/continue-order-modal.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AuthInterceptor } from './users/services/auth.interceptor';
import { DepartmentsComponent } from './departments/departments.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ChatsPageComponent,
        ContinueOrderModalComponent,
        ChatroomComponent,
        HeaderBarComponent,
        WorkspacesComponent,
        DepartmentsComponent,
        TemplatesComponent,
        ProfileInfoComponent,
        CartDialogComponent
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
