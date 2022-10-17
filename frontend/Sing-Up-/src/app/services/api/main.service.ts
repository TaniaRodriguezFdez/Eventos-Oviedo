import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public URL: string;

  constructor(
    public http: HttpClient,
    public event: EventService,
  )
  {
    this.event.service = this;

    this.URL = 'http://localhost:8080/api';
  }

  public async HttpGet<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': '*'
        });

      params = params || {};
      let httpParams = new HttpParams();
      for (let param in params) {
        if (params[param] != null) {
          httpParams = httpParams.append(param, params[param].toString());
        } else {
          httpParams = httpParams.append(param, '');
        }
      }

      const options = {
        headers,
        withCredentials: true,
        params: httpParams,
      };

      this.http.get<T>(this.URL + url, options).subscribe(///GET
        (data) => {
          resolve(data);
        },
        (err) => {
          let errorMessage =
            'Se ha producido un error';
          reject(new Error(errorMessage));
        }
      );
    });
  }

  public async HttpPost<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};

      const options = {
        headers,
        withCredentials: true,
      };

      this.http
        .post<T>(this.URL + url, JSON.stringify(params), options)////POST
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            let errorMessage =
              'Se ha producido un error, ni su padre lo entiende';
            reject(new Error(errorMessage));
          }
        );
    });
  }

  public async HttpPut<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};

      const options = {
        headers,
        withCredentials: true,
      };

      this.http
        .put<T>(this.URL + url, JSON.stringify(params), options)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            let errorMessage =
              'Se ha producido un error, ni su padre lo entiende';
            reject(new Error(errorMessage));
          }
        );
    });
  }

  public async HttpDelete<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      params = params || {};
      let httpParams = new HttpParams();
      for (let param in params) {
        if (params[param] != null) {
          httpParams = httpParams.append(param, params[param].toString());
        } else {
          httpParams = httpParams.append(param, '');
        }
      }

      const options = {
        headers,
        withCredentials: true,
        params: httpParams,
      };

      this.http.delete<T>(this.URL + url, options).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          let errorMessage =
            'Se ha producido un error, ni su padre lo entiende';
          reject(new Error(errorMessage));
        }
      );
    });
  }
}
