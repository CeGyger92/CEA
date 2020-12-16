import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePagesComponent } from './profile-pages.component';

describe('ProfilePagesComponent', () => {
  let component: ProfilePagesComponent;
  let fixture: ComponentFixture<ProfilePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
