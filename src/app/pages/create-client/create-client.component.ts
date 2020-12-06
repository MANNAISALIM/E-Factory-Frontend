import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  myForm: FormGroup;
  public address: string ;
  public contact: string ;
  public email: string ;
  public firstName: string ;
  public gender: string ;
  public lastName: string ;

  // tslint:disable-next-line:max-line-length
  constructor(private toaster: ToastrService , public dialogRef: MatDialogRef<CreateClientComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls) ;
  }
// tslint:disable-next-line:typedef
  get Address() {
    return this.myForm.get('address');
  }
// tslint:disable-next-line:typedef
  get Contact() {
    return this.myForm.get('contact');
  }
  // tslint:disable-next-line:typedef
  get Email() {
    return this.myForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get FirstName() {
    return this.myForm.get('firstName');
  }
  // tslint:disable-next-line:typedef
  get Gender() {
    return this.myForm.get('gender');
  }
  // tslint:disable-next-line:typedef
  get LastName() {
    return this.myForm.get('lastName');
  }
  ngOnInit(): void {
  }

  addEmploye() {
    this.adminservice.createclient(this.myForm.value).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.toaster.success('successfully !  ' , 'Client added');
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
