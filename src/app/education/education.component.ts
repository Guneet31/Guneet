import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  school1Description:String;
  school1SubDescription:String;
  school2Description:String;
  school2SubDescription:String;
  constructor() { }

  ngOnInit(): void {
    this.school1Description = "<p><li>Maintained 3.4 GPA At the time of Graduation</li><li>Studied about various mobile application development tools and technologies</li><li>Worked as a Web Developer-Intern</li></p>"
    this.school2Description ="<p><li>Maintained 3.2 GPA At the time of Graduation</li><li>Studied about various programming language, algorithms subjects, data structures</li><li>Worked on industrial projects during summer internships and training</li><li>Participated and Received awards for tech-projects in University tech-fests</li>"
  }

}
