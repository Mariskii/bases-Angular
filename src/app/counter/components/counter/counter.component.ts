import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>
    Pito: {{ counter }}
  </p>

  <button (click)="increaseBy()">+1</button>
  <button (click)="decreaseBy()">-1</button>
`
})

export class CounterComponent{
  constructor() { }

  public counter:number = 10;

  increaseBy():void{
    this.counter++;
  }

  decreaseBy():void{
    this.counter--;
  }
}
