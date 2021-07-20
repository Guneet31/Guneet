import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsArray = [{id:1,name: "Chakra",img:"assets/chakra.png"},
  {id:2,name: "Parking Application",img:"assets/parking.png"},
  {id: 3, name:"RPS",img:"assets/rps.png"},
  {id:4,name:"ChatBot",img:"assets/chatbot.png"},
  {id:5,name:"Netflix Clone",img:"assets/nflx.png"},
  {id: 6,name:"fifaApp",img:"assets/fifa.png"},
  {id:7,name:"FDG",img:"assets/dragongame.png"},
  {id: 8,name:"NCG",img:"assets/catgame.png"}]
  projectName:any = {id:1,name: "Chakra",img:"assets/chakra.png"};
  projectDescription:any = {id:1,name: "Chakra",img:"assets/chakra.png"};
  constructor() { }
  ngOnInit(): void {

  }
  onAppClick(appName:String)
  {
  this.projectName = this.projectsArray.find(ele => ele.name == appName)
  this.projectDescription = this.projectsArray.find(ele => ele.name == appName)

}

}
