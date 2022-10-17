import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import UserModel from '../../model/userModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public service: MainService;
  public async GetUser(): Promise<UserModel[]>{
    return await this.service.HttpGet("/user.json")
  }
  userModel:UserModel[];
  constructor(private Http:HttpClient) { }
  Url='http://localhost:8080/demo/usuarioModel';
  getUsers() {
    return this.Http.get<UserModel[]>(this.Url);
  }
}
