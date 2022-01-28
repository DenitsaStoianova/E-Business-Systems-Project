import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  readonly heading: string = 'Welcome to WorkHub!';

  readonly subheading: string = 'Create, collaborate and organize your work in one place';

  readonly workspacesButtonText: string = 'Create your workspace';

  constructor(private readonly router: Router) {
  }

  navigateToWorkspacesPage() {
      this.router.navigate([Route.Workspaces]);
  }
}
