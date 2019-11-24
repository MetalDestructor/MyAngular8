import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumber: number;
  myTime: any;

  constructor(){
    this.gameNumber = 0;
  }

  onGameStarted(){
    this.myTime = setInterval(() => {
      this.gameNumber += 1;
    }, 1000);
  }

  onGameStopped(){
    clearInterval(this.myTime);
  }
}
