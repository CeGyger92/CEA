import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],

})
export class ForgotPasswordComponent implements OnInit {
  forgotEmail = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validateEmail(): void{
    if(this.forgotEmail.get('email').valid && this.forgotEmail.get('email').touched){
      const navigationDetails: string[] = ['/forgotpasswordcode'];

      this.router.navigate(navigationDetails);
    }
  }

}
