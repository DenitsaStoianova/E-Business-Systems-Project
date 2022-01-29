import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';

@Component({
  selector: 'app-userHome',
  templateUrl: './userHome.component.html',
  styleUrls: ['./userHome.component.css']
})
export class UserHomeComponent {
  readonly heading: string = 'Welcome to WorkHub!';

  readonly subheading: string = 'Create, collaborate and organize your work in one place';

  readonly workspacesButtonText: string = 'Get your workspace';

  constructor(private readonly router: Router) {
  }

  navigateToWorkspacesPage() {
    this.router.navigate([Route.Workspaces]);
  }
}
