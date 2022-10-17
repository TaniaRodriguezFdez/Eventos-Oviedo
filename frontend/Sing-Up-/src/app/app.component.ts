import { Component, OnInit,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Tarjeta{
  name:string;
  date:string;
  image:string;
  description:string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Proyecto';
  public ArrayCards: Tarjeta[]=[]
  ngOnInit(): void {
    this.ArrayCards = [

    ]
  }
}
