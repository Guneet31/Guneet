import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsArray = [
  {id:1,name: "Gated NFT ",img:"assets/crypto.png",link:"https://devpost.com/software/crypto-jeweler-gated-nft-token"},
  {id:2,name: "NFT Marketplace",img:"assets/vmt.png",link:"https://github.com/Guneet31/vmthub-frontend"},
  {id:3,name: "SpaceXpo",img:"assets/spaceXpo.png",link:"https://discoverspace-d2ee6.web.app/apod"},
  {id:4,name: "Chirp",img:"assets/chirp.png",link:"https://chirp-7bcde.web.app/"},
  // {id:3,name: "Crypto Web Store",img:"assets/crypto.png",link:"https://devpost.com/software/crypto-jeweler-gated-nft-token"}
]
  projectName:any = {id:1,name: "Chakra",img:"assets/chakra.png",link:"https://apps.apple.com/ca/app/chakra/id1509880276"};
  projectDescription:any = {id:1,name: "Chakra",img:"assets/chakra.png"};
  constructor() { }
  ngOnInit(): void {

  }
  onAppClick(appName:String)
  {
  this.projectName = this.projectsArray.find(ele => ele.name == appName)
  this.projectDescription = this.projectsArray.find(ele => ele.name == appName)
  window.open(this.projectName.link)

}

}
