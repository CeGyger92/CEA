import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductionsComponent } from './my-productions.component';

describe('MyProductionsComponent', () => {
  let component: MyProductionsComponent;
  let fixture: ComponentFixture<MyProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
