import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ContinueOrderModalComponent } from './continue-order-modal/continue-order-modal.component';
import { Route } from './route.enum';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AuthGuardService } from './users/services/auth-guard.service';
import { DepartmentsComponent } from './departments/departments.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
    {
        path: Route.Login,
        component: LoginComponent
    },
    {
        path: Route.Register,
        component: RegisterComponent
    },
    {
      path: Route.Workspaces,
      component: WorkspacesComponent
    },
    {
        path: Route.ProfileInfo,
        component: ProfileInfoComponent
    },
    {
        path: Route.Departments,
        component: DepartmentsComponent
    },
    {
        path: Route.Templates,
        component: TemplatesComponent
    },
    {
        path: Route.ChatsPage,
        component: ChatsPageComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: Route.ContinueOrderModal,
        component: ContinueOrderModalComponent
    },
    {
        path: Route.Chatroom,
        component: ChatroomComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
