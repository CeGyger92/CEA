import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-production',
  templateUrl: './edit-production.component.html',
  styleUrls: ['./edit-production.component.css']
})
export class EditProductionComponent implements OnInit {
  isEdit = false;
  constructor() { }

  ngOnInit(): void {
  }

}
