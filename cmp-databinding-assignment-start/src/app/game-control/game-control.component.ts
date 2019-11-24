import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output("gameStarted") gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onGameStarted() {
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000)
    
  }

  onGameStopped() {
    clearInterval(this.interval);
  }
}
