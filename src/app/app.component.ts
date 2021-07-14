import { Component,OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import '@github/typing-effect-element';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Guneet';
  list = ['Hi','Welcome to my Portfolio Website!']
  ngOnInit(): void {
  }
}
