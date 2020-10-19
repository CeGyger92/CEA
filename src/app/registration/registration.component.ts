import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  roles: Array<string>;

  constructor() {
    this.roles = ["Actor", "Project Manager", "Crew", "Admin"];
   }

  ngOnInit(): void {
  }

}
