import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassgenreService {
  private genre = new BehaviorSubject('1');
  currentGenre = this.genre.asObservable();
  constructor() { }
  passGen(g1:string)
  {
    this.genre.next(g1)
    //console.log(g1);
  }
}
