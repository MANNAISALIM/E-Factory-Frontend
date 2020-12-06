import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-vehicl',
  templateUrl: './update-vehicl.component.html',
  styleUrls: ['./update-vehicl.component.css']
})
export class UpdateVehiclComponent implements OnInit {
  myForm: any;
private id;
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private toaster: ToastrService , public dialogRef: MatDialogRef<UpdateVehiclComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      id: new FormControl(this.data.id),
      immatriculation: new FormControl(this.data.immatriculation),
      nomChauffeur: new FormControl(this.data.nomChauffeur),
      poids: new FormControl(this.data.poids),
      typeDeProduit: new FormControl(this.data.typeDeProduit),
    };
    this.myForm = this.fb.group(formControls) ;
  }

  ngOnInit(): void {
  }

  updatevehicle() {
    this.adminservice.updatevehicle(this.data.id, this.myForm.value ).subscribe(
      res => {
        this.dialogRef.close();
        this.toaster.success('Successfully !  ' , 'vehicle updated');
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
