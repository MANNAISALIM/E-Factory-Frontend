import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehiculsComponent } from './create-vehiculs.component';

describe('CreateVehiculsComponent', () => {
  let component: CreateVehiculsComponent;
  let fixture: ComponentFixture<CreateVehiculsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehiculsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehiculsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
