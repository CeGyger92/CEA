import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';

@Component({
  selector: 'app-profile-pages',
  templateUrl: './profile-pages.component.html',
  styleUrls: ['./profile-pages.component.css']
})
export class ProfilePagesComponent implements OnInit {
  profile: Profile;

  constructor() {
  }


  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(): void{
    this.profile.name = "Sam Poole";
    this.profile.experience.push("Example Production 1");
    this.profile.experience.push("Example Produciton 2");
    this.profile.roles.push("Actor");
    this.profile.roles.push("Advisor");
    this.profile.roles.push("Camera Operator");
    this.profile.skills.push("Acting");
    this.profile.skills.push("Camera Operation");
    this.profile.skills.push("Costume Production");
  }


}
