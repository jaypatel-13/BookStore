import { Component, Injectable } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PassgenreService} from "../passgenre.service";

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnDestroy {

  mobileQuery: MediaQueryList;
  genre1:string = "0";
    private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private passGenSer:PassgenreService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOninit()
  {
    this.passGenSer.currentGenre.subscribe(message => this.genre1 = message)
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  FetchGenre(event):void{
      this.genre1 = event.target.value;
      this.passGenSer.passGen(this.genre1);
      //console.log(this.genre1);
}
}
