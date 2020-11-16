import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword-new-password',
  templateUrl: './forgotpassword-new-password.component.html',
  styleUrls: ['./forgotpassword-new-password.component.css']
})
export class ForgotpasswordNewPasswordComponent implements OnInit {
  NewPassword = new FormGroup({
    Password1: new FormControl('',[Validators.required]),
    Password2: new FormControl('',[Validators.required])
  });
  constructor(private router: Router) { }
  samePassword = true;
  ngOnInit(): void {
  }

  SubmitNewPassword(): void{

  }

  savePassword(): void{
    if(this.NewPassword.get('Password1').value == this.NewPassword.get('Password2').value){
      this.SubmitNewPassword();
      const navigationDetails: string[] = ['/'];
      this.router.navigate(navigationDetails);
    }
    else{
      this.samePassword = false;
    }
  }

}
