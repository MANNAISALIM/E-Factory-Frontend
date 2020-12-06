import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CommandComponent } from './pages/command/command.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import {ToastrModule} from 'ngx-toastr';
import {BasicAuthHttpInterceptorServiceService} from './basic-auth-http-interceptor-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateEmployeComponent } from './pages/create-employe/create-employe.component';
import { CreateVehiculsComponent } from './pages/create-vehiculs/create-vehiculs.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { UpdateEmployeComponent } from './pages/update-employe/update-employe.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { UpdateVehiclComponent } from './pages/update-vehicl/update-vehicl.component';


@NgModule({
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CommandComponent,
    VehicleComponent,
    CreateEmployeComponent,
    CreateVehiculsComponent,
    CreateProductsComponent,
    CreateClientComponent,
    UpdateEmployeComponent,
    UpdateClientComponent,
    UpdateProductComponent,
    UpdateVehiclComponent,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorServiceService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateEmployeComponent,
    CreateVehiculsComponent ,
    CreateProductsComponent ,
    UpdateEmployeComponent,
    UpdateVehiclComponent,
    UpdateProductComponent,
    UpdateClientComponent,
    CreateClientComponent]
})
export class AppModule { }
