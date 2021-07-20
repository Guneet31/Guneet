import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsArray = ["Swift", "SwiftUI", "XCode", "Angular", "TypeScript", "JavaScript", "Java", "C++", "MySQL", "Firebase", "MongoDB"
    , "LoopBack", "AdobeXD"]

  selectedSkill = "Swift 🔥";
  selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects Worked on fullstack iOS Applications.<br/>Developed ml models in XCode using Swift.</p>";
  searchControl: FormControl
  constructor() {

  }

  ngOnInit(): void {

  }
  setSkill(skill: any) {
    this.selectedSkill = this.skillsArray.find(ele => ele == skill)
    console.log(this.selectedSkill)
    if (this.selectedSkill == "Swift") {
      this.selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects Worked on fullstack iOS Applications.<br/>Developed ml models in XCode using Swift.</p>";
    }
    else if (this.selectedSkill == "SwiftUI") {
      this.selectedSkillDescription = "<p> SwiftUI is a set of tools which helps in building ios applicatons fast</p>"
    }
    else if (this.selectedSkill == "XCode") {

    }
    else if (this.selectedSkill == "Angular") {

    }
    else if (this.selectedSkill == "TypeScript") {

    }
    else if (this.selectedSkill == "JavaScript") {

    }
    else if (this.selectedSkill == "Java") {

    }
    else if (this.selectedSkill == "C++") {

    }
    else if (this.selectedSkill == "MySQL") {

    }
    else if (this.selectedSkill == "Firebase") {

    }
    else if (this.selectedSkill == "MongoDB") {

    }
    else if (this.selectedSkill == "LoopBack") {

    }
    else if (this.selectedSkill == "AdobeXD") {

    }









  }

}
