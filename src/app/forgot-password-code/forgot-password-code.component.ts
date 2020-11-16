import { Component, OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-code',
  templateUrl: './forgot-password-code.component.html',
  styleUrls: ['./forgot-password-code.component.css']
})
export class ForgotPasswordCodeComponent implements OnInit {
  CodeInfo = new FormGroup({
    code: new FormControl('',[Validators.required])
  });
  constructor(private router: Router) { }
  codeFailed = false;
  ngOnInit(): void {
  }

  testCode(): boolean{
    return true;
  }

  validateCode(): void{

    if(this.testCode()){
      const navigationDetails: string[] = ["/forgotpasswordNewPassword"];

      this.router.navigate(navigationDetails);
    }
    else{
      this.codeFailed = true;
    }
  }


}
