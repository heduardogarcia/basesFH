import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?:string;
  public heroNames:string[]=['Spiderman','Ironman','Hulk','Thor'];
  removeLastHero():void{
     this.deletedHero=this.heroNames.pop();

  }
}
