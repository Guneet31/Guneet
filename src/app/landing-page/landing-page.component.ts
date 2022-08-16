import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    ApplicationArray=[
    {id:9, name: "TextToxic is a web application built on tensorflowjs model for detecting text sentiment and giving user feedback for the text they input. It shows how much toxicity was in a text",img:"assets/tox.png",link:"https://github.com/Guneet31/TextToxic"},
    {id:2,name: "Parking Application is an iOS application developed using Swift. It shows users nearest parking spots for selected location",img:"assets/parking.png",link:"https://bitbucket.org/GuneetSingh311/parkingspotterproject/src/master/"},
    {id: 3, name:"Rock Paper Scissor is an iOS application/game developed using Swift. It is based on reallife rock paper scissor game and support multiplayer support for P2P experience using firebase. It makes connection using unique key and on winning sends user notification",img:"assets/rps.png",link:"https://bitbucket.org/GuneetSingh311/guneet_rockpaperscissorproject/src/master/"},
    {id:4,name:"AIChatBot is application developed using IBM watson for interacting with user and responsing to their queries",img:"assets/chatbot.png",link:"https://bitbucket.org/GuneetSingh311/chattyapp/src/master/"},
    {id:5,name:"Netflix Clone is just an experimentation using Swift and JavaScript to create a clone of Netflix Application to get data for movies/shows",img:"assets/nflx.png",link:"https://bitbucket.org/GuneetSingh311/netflix-clone-app/src/master/NetflixClone/"},
    {id: 6,name:"FifaApp is a application which shows upcoming football matches and sends user notification on apple watch",img:"assets/fifa.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5314_activity3-5/src/master/"},
    {id:7,name:"FDG is Mobile/Web game where a dragon is running away from monsters and avoiding collision with objects. Project purpose was to understand parallax effect, game physics and collision detection",img:"assets/dragongame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_androidassignment/src/master/"},
    {id: 8,name:"NCG is Mobile/Web game where a Ninja cat is avoiding collision with aliens too proceed to next level. Project purpose was to understand physics, game user interfaces and Spritekit/SceneKit impementation",img:"assets/catgame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_iosassignment/src/master/"},
    
    // {id:1,name: "Chakra",img:"assets/chakra.png",link:"https://apps.apple.com/ca/app/chakra/id1509880276"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openLink(link:any)
  {
    window.open(link)
  }
}
