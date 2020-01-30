import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from './books';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private _url:string = "assets/data.json";
  constructor(private http:HttpClient) { }
  getBooks():Observable<IBooks[]>
  {
    return this.http.get<IBooks[]>(this._url);
  }


}
