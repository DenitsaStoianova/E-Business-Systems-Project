import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Department } from './department.interface';
import { Router } from '@angular/router';
import { Route } from '../route.enum';
import {CATEGORY_NAME} from "../constants";

//import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-workspaces',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{
  /*public sampleData = [{
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
    */

 departments: Array<Department> = [];

 constructor(private readonly router: Router, private readonly httpClient: HttpClient) {
 }


 ngOnInit() {
  this.httpClient.get<Array<Department>>(environment.serveUrl + '/departments').subscribe(
       (department: Array<Department>)=>{
          for(let i = 0; i < department.length; ++i) {
            console.log(department);
            this.departments[i] = department[i]
          }
       }
  );
}

  navigateToTemplatesPage(category: string) {
   localStorage.setItem(CATEGORY_NAME, category);
   this.router.navigate([Route.Templates]);
  }
}
