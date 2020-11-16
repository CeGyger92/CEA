import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationInfo = new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],),
    Password: new FormControl('',[Validators.required]),
    Password2: new FormControl('',[Validators.required]),
    Role: new FormControl('',[Validators.required]),
    Skills: new FormControl('',[Validators.required]),
    Experience: new FormControl('',[Validators.required])
  });
  roles: Array<string>;
  inputIncorrect:boolean;
  constructor(private router: Router) {
    this.roles = ["Actor", "Project Manager", "Crew", "Admin"];
   }

  ngOnInit(): void {
  }


  register(): void{
    if(this.RegistrationInfo.get('Email').valid && (this.RegistrationInfo.get('Password').value == this.RegistrationInfo.get('Password2').value) && this.RegistrationInfo.get('Password').touched && this.RegistrationInfo.get('Password2').touched && this.RegistrationInfo.get('Role').touched && this.RegistrationInfo.get('Skills').touched && this.RegistrationInfo.get('Experience').touched ){
      const navigationDetails: string[] = ['/'];
      this.router.navigate(navigationDetails);
    }
    else{
      this.inputIncorrect = true;
    }
  }
}
