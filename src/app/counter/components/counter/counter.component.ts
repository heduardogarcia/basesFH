import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template  : `
  <h1>Counter</h1>
  <h3>Valor:{{counter}}</h3>
  <button (click)="incrementBy(1)">+1</button>
<button (click)="resetCount()">Reset</button>
<button (click)="incrementBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }
  counter:number=111;
  incrementBy(value:number):void{
    this.counter+=value;
  }
  resetCount(){
    this.counter=100;
  }

}
