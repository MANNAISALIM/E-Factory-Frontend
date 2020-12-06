import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  commandsList: any = [];

  constructor(private toaster: ToastrService , private  admin: AdminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.admin.getAllCommands().subscribe(
      result => {
        console.log(result);
        this.commandsList = result;
      },
      error1 => {
        console.log(error1);
      }
    );
  }
}
