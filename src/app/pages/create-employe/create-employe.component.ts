import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
  myForm: FormGroup;
  public firstName: string ;
  public lastName: string ;
  public date_birth: string ;
  public identity: string ;
  public email: string ;
  public contact: string ;
  public address: string ;
  public salaire: string ;
  public status: string ;
  // tslint:disable-next-line:max-line-length
  constructor(private toaster: ToastrService , public dialogRef: MatDialogRef<CreateEmployeComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      date_birth: new FormControl('', [Validators.required]),
      identity: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      salaire: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls) ;
  }
// tslint:disable-next-line:typedef
  get FirstName() {
    return this.myForm.get('firstName');
  }
  // tslint:disable-next-line:typedef
  get LastName() {
    return this.myForm.get('lastName');
  }
  // tslint:disable-next-line:typedef
  get Date_birth() {
    return this.myForm.get('date_birth');
  }
  // tslint:disable-next-line:typedef
  get Identity() {
    return this.myForm.get('identity');
  }
  // tslint:disable-next-line:typedef
  get Email() {
    return this.myForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get Contact() {
    return this.myForm.get('contact');
  }
  // tslint:disable-next-line:typedef
  get Address() {
    return this.myForm.get('address');
  }
  // tslint:disable-next-line:typedef
  get Salaire() {
    return this.myForm.get('salaire');
  }
  // tslint:disable-next-line:typedef
  get Status() {
    return this.myForm.get('status');
  }
  ngOnInit(): void {
  }

  addEmploye() {
    this.adminservice.createemplyer(this.myForm.value).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.toaster.success('successfully !  ' , 'employe added');
      },
      err => {
        console.log(err);
        this.dialogRef.close();
        this.toaster.error('Try again ' , 'some error occured  !');
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
