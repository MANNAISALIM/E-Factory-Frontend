import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  myForm: FormGroup;
  public description_produit: string ;
  public libProduit: string ;
  public prix_produit: string ;
  public quantité_dispo_produit: string ;
  public taxe: string ;
  // tslint:disable-next-line:max-line-length
  constructor(private toaster: ToastrService , public dialogRef: MatDialogRef<CreateProductsComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      description_produit: new FormControl('', [Validators.required, Validators.minLength(5)]),
      libProduit: new FormControl('', [Validators.required, Validators.minLength(10)]),
      prix_produit: new FormControl('', [Validators.required]),
      quantité_dispo_produit: new FormControl('', [Validators.required]),
      taxe: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls) ;
  }
// tslint:disable-next-line:typedef
  get Description_produit() {
    return this.myForm.get('description_produit');
  }
  // tslint:disable-next-line:typedef
  get LibProduit() {
    return this.myForm.get('libProduit');
  }
  // tslint:disable-next-line:typedef
  get Prix_produit() {
    return this.myForm.get('prix_produit');
  }
  // tslint:disable-next-line:typedef
  get Quantité_dispo_produit() {
    return this.myForm.get('quantité_dispo_produit');
  }
  // tslint:disable-next-line:typedef
  get Taxe() {
    return this.myForm.get('taxe');
  }
  ngOnInit(): void {
  }

  addEmploye() {
    this.adminservice.createproduct(this.myForm.value).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
        this.toaster.success('successfully !  ' , 'Product added');
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
