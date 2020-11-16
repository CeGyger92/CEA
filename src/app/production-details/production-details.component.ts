import { Component, OnInit } from '@angular/core';
import {RESULTS} from '../mock-results';
import {Production} from '../production';
@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponent implements OnInit {
  results : Array<Production> = new Array<Production>();
  constructor() {
    this.results.push(RESULTS[1]);
   }

  ngOnInit(): void {
  }

}
