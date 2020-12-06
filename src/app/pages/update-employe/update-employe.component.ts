import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {CreateClientComponent} from '../create-client/create-client.component';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  myForm: any;

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private toaster: ToastrService , public dialogRef: MatDialogRef<UpdateEmployeComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      id: new FormControl(this.data.id),
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      date_birth: new FormControl(this.data.date_birth),
      identity: new FormControl(this.data.identity),
      email: new FormControl(this.data.email),
      contact: new FormControl(this.data.contact),
      address: new FormControl(this.data.address),
      salaire: new FormControl(this.data.salaire),
      status: new FormControl(this.data.status),
    };
    this.myForm = this.fb.group(formControls) ;
  }

  ngOnInit(): void {
  }

  updateEmploye() {
    this.adminservice.updateemplyer(this.data.id, this.myForm.value ).subscribe(
      res => {
        this.dialogRef.close();
        this.toaster.success('Successfully !  ' , 'Employer updated');
        this.toaster.info('changes will be considered after reloading the page  !  ' );
      },
      err => {
        console.log(err);
        this.dialogRef.close();
        this.toaster.error('Try again ' , 'Some error occured  !');
      }
    );
  }
  close() {
    this.dialogRef.close();
  }

}
