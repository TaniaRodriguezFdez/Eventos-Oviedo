import { Component, OnInit } from '@angular/core';


import EventModel from '../../model/eventModel';
import { MainService } from '../../services/api/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public events: EventModel[];

  constructor(private service: MainService) {

  }

  async ngOnInit(): Promise<void> {
    this.events = await this.service.event.GetEvents();
    console.log(this.events);
  }

  }


