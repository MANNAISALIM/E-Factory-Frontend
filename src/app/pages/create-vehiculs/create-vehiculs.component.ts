import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-create-vehiculs',
  templateUrl: './create-vehiculs.component.html',
  styleUrls: ['./create-vehiculs.component.css']
})
export class CreateVehiculsComponent implements OnInit {
  myForm: FormGroup;
  public immatriculation: string ;
  public nomChauffeur: string ;
  public poids: string ;
  public typeDeProduit: string ;
  // tslint:disable-next-line:max-line-length
  constructor(private toaster: ToastrService , public dialogRef: MatDialogRef<CreateVehiculsComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      immatriculation: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nomChauffeur: new FormControl('', [Validators.required, Validators.minLength(10)]),
      poids: new FormControl('', [Validators.required]),
      typeDeProduit: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls) ;
  }
// tslint:disable-next-line:typedef
  get Immatriculation() {
    return this.myForm.get('immatriculation');
  }
  // tslint:disable-next-line:typedef
  get NomChauffeur() {
    return this.myForm.get('nomChauffeur');
  }
  // tslint:disable-next-line:typedef
  get Poids() {
    return this.myForm.get('poids');
  }
  // tslint:disable-next-line:typedef
  get TypeDeProduit() {
    return this.myForm.get('typeDeProduit');
  }
  ngOnInit(): void {
  }

  addEmploye() {
    this.adminservice.createvehicle(this.myForm.value).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.toaster.success('successfully !  ' , 'Vehicle added');
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
