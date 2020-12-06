import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {FormBuilder, FormControl} from '@angular/forms';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  myForm: any;

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService, public dialogRef: MatDialogRef<UpdateClientComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls1 = {
      id: new FormControl(this.data.id),
      address: new FormControl(this.data.address),
      contact: new FormControl(this.data.contact),
      email: new FormControl(this.data.email),
      firstName: new FormControl(this.data.firstName),
      gender: new FormControl(this.data.gender),
      lastName: new FormControl(this.data.lastName),
    };
    this.myForm = this.fb.group(formControls1);
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  updateclient() {
    this.adminservice.updateclient(this.data.id, this.myForm.value).subscribe(
      res => {
        this.dialogRef.close();
        this.toaster.success('Successfully !  ', 'Client updated');
        this.toaster.info('changes will be considered after reloading the page  !  ');
      },
      err => {
        console.log(err);
        this.dialogRef.close();
        this.toaster.error('Try again ', 'Some error occured  !');
      }
    );
  }
}
