import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  data: number = 0;
  @Output() increment = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    if(this.interval) return;
    this.interval = setInterval(()=>{
      console.log("interval started", this.data)
      this.increment.emit(this.data++)
    },1000)
  }
  stopGame() {
    clearInterval(this.interval);
    this.interval = 0;
  }
}
