import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.css']
})

export class ProductionsComponent implements OnInit {
 results: string[];
  constructor() {
    this.results = ["Result1", "Result2", "Result3", "Results4"];
  }

  ngOnInit(): void {
  }

}
