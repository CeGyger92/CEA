import { Component, OnInit } from '@angular/core';
import { Production } from '../production';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.css']
})

export class ProductionsComponent implements OnInit {
 results: Production[];

  constructor() {
    const resultCreator = new Production();

    const result = resultCreator.create({
      name: 'Hamilton',
      date: 'yyyy/MM/dd',
      desc: 'Description for the event',
      imgPath: 'assets/placeholder.png'
    });

  }

  ngOnInit(): void {
  }

}
