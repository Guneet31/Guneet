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
  list = [' Design 🎨','<Develop 💻/>', 'Deploy ☁️😶‍🌫️']
  isMobile:Boolean = false

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
}
