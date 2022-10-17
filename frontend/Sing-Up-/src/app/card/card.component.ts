import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('name') public name:string;
  @Input('img') public img:string;
  @Input('date') public date:string;
  @Input('description') public description:string;
  @Input() event:any;
  
  public image?:string;
  public Titulo:string ="titulo de card.components.ts";

  constructor() { }

  ngOnInit(): void {
    
  }

}
