import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {CreateVehiculsComponent} from '../create-vehiculs/create-vehiculs.component';
import {UpdateVehiclComponent} from '../update-vehicl/update-vehicl.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  VehiculesList: any = [];

  constructor(private toaster: ToastrService , private  admin: AdminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.admin.getAllvehiculs().subscribe(
      result => {
        this.VehiculesList = result;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  Oncreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    this.dialog.open(CreateVehiculsComponent, dialogConfig);
  }

  delete(pjt) {
    this.admin.deletevehicle(pjt.id).subscribe(
      res => {
        console.log(res);
        this.toaster.warning('Vehicle deleted');
      },
      err => {
        console.log(err);
        this.toaster.error('Try again ' , 'some error occured  !');
      }
    );

  }

  update(pjt) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    dialogConfig.data = pjt ;
    this.dialog.open(UpdateVehiclComponent, dialogConfig);
  }
}
