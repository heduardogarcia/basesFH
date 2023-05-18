import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basesEG';
  counter:number=100;
  incrementBy(value:number):void{
    this.counter=this.counter+value;
  }
  resetCount(){
    this.counter=100;
  }
}
