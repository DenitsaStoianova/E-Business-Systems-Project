import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import {CATEGORY_NAME} from "../constants";

//import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-workspaces',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  public sampleData = [{
    name: 'IT Department',
    imgUrl: 'it_dept.png',
    firstCategory: 'Project management',
    secondCategory: 'Team',
    thirdCategory: 'Technical documentation'
  },
    {
      name: 'HR Department',
      imgUrl: 'hr.png',
      firstCategory: 'Recruitment',
      secondCategory: 'Skill Training',
      thirdCategory: 'Meetings'
    },
    {
      name: 'Marketing Department',
      imgUrl: 'marketing.jpg',
      firstCategory: 'Promote',
      secondCategory: 'Researching',
      thirdCategory: 'Meetings'
    }];

 constructor(private readonly router: Router) {
 }

  navigateToTemplatesPage(category: string) {
   localStorage.setItem(CATEGORY_NAME, category);
   this.router.navigate([Route.Templates]);
  }
}
