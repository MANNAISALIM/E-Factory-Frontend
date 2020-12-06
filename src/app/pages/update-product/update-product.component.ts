import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  myForm: any;

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private toaster: ToastrService , public dialogRef: MatDialogRef<UpdateProductComponent>, private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      id: new FormControl(this.data.id),
      description_produit: new FormControl(this.data.description_produit),
      libProduit: new FormControl(this.data.libProduit),
      prix_produit: new FormControl(this.data.prix_produit),
      quantité_dispo_produit: new FormControl(this.data.quantité_dispo_produit),
      taxe: new FormControl(this.data.taxe),
    };
    this.myForm = this.fb.group(formControls) ;
  }

  ngOnInit(): void {
  }

  updateproduct() {
    this.adminservice.updateproduct(this.data.id, this.myForm.value ).subscribe(
      res => {
        this.dialogRef.close();
        this.toaster.success('Successfully !  ' , 'Product updated');
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
