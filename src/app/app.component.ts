import { Component } from '@angular/core';
import { Student } from '../app/app.student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of all skills';
  studentTitle = 'List of all students';
  skills = ['C#', 'ASP.Net', 'MVC', 'Angular', 'JavaScript'];
  students = [new Student(1, 'Qaiser Mehmood'), new Student(1, 'Hassan Qadri') ];

  constructor() {
    this.skills.push('SQL Server');
    this.students.push(new Student(3, 'Hussain Qadri'));
  }
  public ShowIt(x: string) {
    alert(x);
  }
  public AddSkill(skill: string) {
    this.skills.push(skill);
  }
}
