import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionComponent } from './edit-production.component';

describe('EditProductionComponent', () => {
  let component: EditProductionComponent;
  let fixture: ComponentFixture<EditProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
