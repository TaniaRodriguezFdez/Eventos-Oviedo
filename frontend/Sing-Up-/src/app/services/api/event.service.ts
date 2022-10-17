import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import EventModel from '../../model/eventModel';
import { HttpClient } from '@angular/common/http';






import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public apiURL: string = 'http://localhost:8080/api/';
  public service: MainService;

  public async GetEvents(): Promise<EventModel[]> {
    // let resultado = await this.service.HttpGet("/evento");
    // return await this.service.HttpGet("http://localhost:8080/api");
    return await this.service.HttpGet("/evento");
    
    //giaco code
    /* let resultado = await fetch(this.apiURL + "evento", {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let data = await resultado.json();
    return data; */
  }

  eventModel: EventModel[];
  constructor(private Http: HttpClient) { }
  Url = 'http://localhost:8080/evento';

  //   getEvents():Observable<any> {
  //     return this.Http.get<EventModel[]>(this.Url);
  //   }
  //   getOneEvent(id: string):Observable<any> {
  //     return this.Http.get(this.Url+'/'+id);
  //   }
  //   saveEvent(evento: Evento):Observable<any> {
  //     return this.Http.post(this.Url,evento);
  //   }
  //   editEvent(id:string, evento: Evento):Observable<any> {
  //     return this.Http.put(this.Url+'/'+id, evento);
  //   }
  //   deleteEvent(id:string):Observable<any> {
  //     return this.Http.delete(this.Url+'/'+id, evento);
  //   }
  // }
  //  export interface Evento{
  //     id:string;
  //     imagen:string;
  //     descripción:string;
  //     fecha:string;
  //     título:string;

  //  }
}
