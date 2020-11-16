import { Component, OnInit } from '@angular/core';
import { Production } from '../production';
import {RESULTS} from '../mock-results';
@Component({
  selector: 'app-my-productions',
  templateUrl: './my-productions.component.html',
  styleUrls: ['./my-productions.component.css']
})
export class MyProductionsComponent implements OnInit {
  results : Array<Production> = new Array<Production>();
  constructor() {
    this.results.push(RESULTS[1]);
    this.results.push(RESULTS[3]);
   }

  ngOnInit(): void {
  }

}
