import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsArray = ["Swift ⎨🕊⎬", "SwiftUI 📱", "XCode 💻", "Angular ⎨🅰️⎬", "TypeScript⎨✝️⎬", "JavaScript⎨🉑⎬", "C++ ⎨🔱⎬","MySQL ", "Blockchain", "Web3.0","Firebase ","NodeJS", "AdobeXD 🎨","HTML","CSS","Solidity"]

  selectedSkill = "Swift ⎨🕊⎬";
  selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects<br/> Worked on fullstack iOS Applications<br/>Developed ml models in XCode using Swift</p>";
  searchControl: FormControl
  constructor() {

  }

  ngOnInit(): void {

  }
  setSkill(skill: any) {
    this.selectedSkill = this.skillsArray.find(ele => ele == skill)
    console.log(this.selectedSkill)
    if (this.selectedSkill == "Swift ⎨🕊⎬") {
      this.selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects Worked on fullstack iOS Applications.<br/>Developed ml models in XCode using Swift.</p>";
    }
    else if (this.selectedSkill == "SwiftUI 🔥📱") {
      this.selectedSkillDescription = "<p> SwiftUI is a set of tools which helps in building ios applicatons fast<br/> Worked on projects which integrage SwiftUI and UI Kit<br/>Experience working with component based architecture<br/>Published iOS application written in SwiftUI on appstore</p>"
    }
    else if (this.selectedSkill == "XCode 💻") {
      this.selectedSkillDescription = "<p>Experience working with IDE<br/>Project Setup<br/>Application Architecture Design<br/>Building and packaging application for pusblishing on appstore</p>"
    }
    else if (this.selectedSkill == "Angular ⎨🅰️⎬") {
      this.selectedSkillDescription = "<p>Experience working with Angular7+<br/> Worked on live projects<br/>Installation of node packages and integrating in application<br/>Experience working with angular material for responsive web design<br/>Experience working with component based architecture</p>"
    }
    else if (this.selectedSkill == "TypeScript⎨✝️⎬") {
      this.selectedSkillDescription = "<p>Experience working with TypeScript<br/> Worked on live projects<br/>Used for developing Angular7+ web application</p>"
    }
    else if (this.selectedSkill == "JavaScript⎨🉑⎬") {
      this.selectedSkillDescription = "<p>Experience working with JavaScript<br/>Developed web applications using JavaScript<br/>Worked on live projects based on JavaScript</p>"
    }

    else if (this.selectedSkill == "C++ ⎨🔱⎬") {
      this.selectedSkillDescription = "<p>Knowledge of C++ programming language<br/>Worked on college projects based on management projects and games<br/>Knowledge of OOPS and Data Structures in c++</p>"
    }
    else if (this.selectedSkill == "MySQL 📀") {
    this.selectedSkillDescription = "<p>Experience working on live projects based on MySQL<br/>Knowledge of Relation Database Mangement System<br/>Experience with setting up schemas,creating table, insertion and other MySQL opetations<br/>Hosting MySQL database server</p>"
    }
    else if (this.selectedSkill == "Firebase 💿") {
this.selectedSkillDescription = "<p>Experience working with Firebase<br/>Worked with firebase iOS sdk for developing cloud based applications<br/>Experience working with GCP and google cloud functions<br/>Integrating Google ML in iOS<br/>Experience with Google Analytics and Google AdMob</p>"
    }
    else if (this.selectedSkill == "NodeJS ⎨🚊⎬") {
this.selectedSkillDescription ="<p>Worked in NodeJS environment to build backend solutions for live projects<br/>Experience working with ExpressJs with Nodejs<br/>Experience working with IBM Loopback for API generation<br/>Worked with Angular7+,NodeJS and MySQl for developing fullstack applications</p>"
    }
    else if (this.selectedSkill == "AdobeXD 🎨") {
this.selectedSkillDescription = "<p>Experience in developing UI for iOS and web apps<br/>Worked on UI/UX prototyping to turn design ideas into reality</p>"
    }
    else if(this.selectedSkill == "Team Work 👩🏼‍💻🧑🏻‍💻")
    {
this.selectedSkillDescription = "<p>Experience working in teams with 4-5 members including team lead<br/>Respect for team members<br/>Enjoy sharing ideas</p>"
    }
    else if(this.selectedSkill == "Time Management ⏱")
    {
      this.selectedSkillDescription = "<p>Experience working in time constraints<br/>Experience working on live projects which has deadlines to meet<br/>Follow Scrum and agile techniques to achieve goals<br/></p>"
    }
// added some changes








  }

}
