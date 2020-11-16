import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginInfo = new FormGroup({
    Username: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required])
  });
  constructor(private router: Router) { }
  allowLogin = false;
  validCredentials = false;
  ngOnInit(): void {
  }

  validLoginInfo(): boolean{
    return true;
  }

  loginFunction(): void{

    //Verify login information with server then select true or false;
    if(this.LoginInfo.get('Username').touched && this.LoginInfo.get('Password').touched && this.validLoginInfo()){
      const navigationDetails: string[] = ['/productions'];

      this.router.navigate(navigationDetails);
    }
    else{
      this.validCredentials = false;
    }
  }
}
