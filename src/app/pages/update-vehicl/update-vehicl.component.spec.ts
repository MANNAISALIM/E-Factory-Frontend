import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehiclComponent } from './update-vehicl.component';

describe('UpdateVehiclComponent', () => {
  let component: UpdateVehiclComponent;
  let fixture: ComponentFixture<UpdateVehiclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehiclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehiclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
