import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs'
import '@github/typing-effect-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Guneet';
  projectName:any;
  list = [' Design 🎨','<Develop 💻/>', 'Deploy ☁️😶‍🌫️']
  isMobile:Boolean = false
  iosApplicationArray=[
  {id:2,name: "Parking Application",img:"assets/parking.png",link:"https://bitbucket.org/GuneetSingh311/parkingspotterproject/src/master/"},
  {id: 3, name:"RPS",img:"assets/rps.png",link:"https://bitbucket.org/GuneetSingh311/guneet_rockpaperscissorproject/src/master/"},
  {id:4,name:"ChatBot",img:"assets/chatbot.png",link:"https://bitbucket.org/GuneetSingh311/chattyapp/src/master/"},
  {id:5,name:"Netflix Clone",img:"assets/nflx.png",link:"https://bitbucket.org/GuneetSingh311/netflix-clone-app/src/master/NetflixClone/"},
  {id: 6,name:"fifaApp",img:"assets/fifa.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5314_activity3-5/src/master/"},
  {id:7,name:"FDG",img:"assets/dragongame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_androidassignment/src/master/"},
  {id: 8,name:"NCG",img:"assets/catgame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_iosassignment/src/master/"},
  // {id:1,name: "Chakra",img:"assets/chakra.png",link:"https://apps.apple.com/ca/app/chakra/id1509880276"}
]
  constructor(private _snackBar: MatSnackBar) {}


 
  ngOnInit(): void {
    if(window.innerWidth < 900)
    {
      this.isMobile = true
    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  openLink(link:any)
  {
    window.open(link)
  }
  onAppClick(appName:String)
  {
  this.projectName = this.iosApplicationArray.find(ele => ele.name == appName)
  window.open(this.projectName.link)

}
}
