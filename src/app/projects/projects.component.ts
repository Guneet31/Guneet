import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsArray = ["p1","p2","p3","p4","p5","p6","p7"]
  projectName = "p1";
  projectDescription = "p1";
  constructor() { }
  ngOnInit(): void {

  }
  onAppClick(appName:String)
  {
  this.projectName = this.projectsArray.find(ele => ele == appName)
  this.projectDescription = this.projectsArray.find(ele => ele == appName)

}

}
