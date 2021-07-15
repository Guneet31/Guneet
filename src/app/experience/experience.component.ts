import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  company1Description:String;
  company1SubDescription:String;
  company2Description:String;
  company2SubDescription:String;
  constructor() { }

  ngOnInit(): void {
    this.company1Description = "<p><li>Frontend development using Angular, TypeScript, iOS, Swift, Swift UI</li><li>Backend development using Loopback Node.js MySQL DB management and performing queries as per tasks</li><li> Deploy code on Google Cloud</li><li>Bitbucket for version control</li></p>"
    this.company2Description = "<p><li>Frontend development using Angular, TypeScript</li><li>Backend development using Node.js, firebase</li><li> Performed frontend end testing using Selenium and Java</li><li> Deploy code on Jenkins, AWS Cloud</li><li>Bitbucket used for version control</li><p>"


  }

}
