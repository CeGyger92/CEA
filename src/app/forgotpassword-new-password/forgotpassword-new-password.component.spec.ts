import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordNewPasswordComponent } from './forgotpassword-new-password.component';

describe('ForgotpasswordNewPasswordComponent', () => {
  let component: ForgotpasswordNewPasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
