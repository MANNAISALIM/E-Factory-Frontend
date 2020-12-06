import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateClientComponent} from '../create-client/create-client.component';
import {UpdateClientComponent} from '../update-client/update-client.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  clientsList: any = [];

  constructor(private toaster: ToastrService , private  admin: AdminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.admin.getAllclients().subscribe(
      result => {
        this.clientsList = result;
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
    this.dialog.open(CreateClientComponent, dialogConfig);
  }

  delete(pjt) {
    this.admin.deleteclient(pjt.id).subscribe(
      res => {
        console.log(res);
        this.toaster.warning('Client  deleted !');
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
    this.dialog.open(UpdateClientComponent , dialogConfig);
  }
}
