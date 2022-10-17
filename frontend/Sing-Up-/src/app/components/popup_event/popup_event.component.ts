import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup_event',
  templateUrl: './popup_event.component.html',
  styleUrls: ['./popup_event.component.scss']
})
export class PopupEventComponent implements OnInit {
@Input('name') public name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
