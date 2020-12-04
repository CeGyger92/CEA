import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {RESULTS} from '../mock-results';
import {Production} from '../production';

@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponent implements OnInit {
  results : Array<Production> = new Array<Production>();
  private route: ActivatedRoute = new ActivatedRoute();
  private router: Router;

  constructor() {
    this.results.push(RESULTS[this.route.snapshot.paramMap.get('selector')]);
   }

  ngOnInit(): void {
  }

}
