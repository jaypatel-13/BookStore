import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { PassgenreService } from '../passgenre.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dispbooks',
  templateUrl: './dispbooks.component.html',
  styleUrls: ['./dispbooks.component.css']
})
export class DispbooksComponent implements OnInit {

  public booksList=[];
  public finalList=[];
  i:number; count:number = 0;
  jp:string=".jpg";
  constructor(public fetchServ:FetchService, private passGenSer: PassgenreService) { }
  gen:string;
  ngOnInit() {
    this.fetchServ.getBooks().subscribe(data => {this.booksList = data;})
    
  this.passGenSer.currentGenre.subscribe(message=> this.gen = message);
   
  }
}
