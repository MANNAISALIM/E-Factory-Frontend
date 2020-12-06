import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateProductsComponent} from '../create-products/create-products.component';
import {ToastrService} from 'ngx-toastr';
import {UpdateProductComponent} from '../update-product/update-product.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  productsList: any = [];

  constructor(private toaster: ToastrService , private  admin: AdminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.admin.getAllProducts().subscribe(
      result => {
        this.productsList = result;
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
    this.dialog.open(CreateProductsComponent, dialogConfig);
  }

  delete(pjt) {
    this.admin.deleteproduct(pjt.id).subscribe(
      res => {
        console.log(res);
        this.toaster.warning( 'Product  deleted !');
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
    this.dialog.open(UpdateProductComponent, dialogConfig);
  }
}
