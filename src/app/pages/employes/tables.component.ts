import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {CreateEmployeComponent} from '../create-employe/create-employe.component';
import {UpdateEmployeComponent} from '../update-employe/update-employe.component';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  emplyeesList: any = [];

  constructor(private toaster: ToastrService , private  admin: AdminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.admin.getAllEmployees().subscribe(
      result => {
        this.emplyeesList = result;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  delete(pjt) {
      this.admin.deletemployee(pjt.id).subscribe(
        res => {
          console.log(res);
          this.toaster.success('successfully !  ' , 'employe deleted');
        },
        err => {
          console.log(err);
          this.toaster.error('Try again ' , 'some error occured  !');
        }
      );

  }

  Oncreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
      this.dialog.open(CreateEmployeComponent, dialogConfig);
  }

  update(pjt) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = '60%';
    dialogConfig.data = pjt ;
    this.dialog.open(UpdateEmployeComponent, dialogConfig);
  }
}
