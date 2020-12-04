import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Production } from '../production';
import {LoginComponent} from '../login/login.component';
import {RESULTS} from '../mock-results';


@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.css']
})

export class ProductionsComponent implements OnInit {
 results = RESULTS;
 isAdmin = true;
 selected = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
