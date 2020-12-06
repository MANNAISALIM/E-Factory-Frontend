import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private registerUserUrl = 'http://localhost:8086/Efactory/login/auth/signup';
  private loginUrl = 'http://localhost:8086/Efactory/login/auth/signin';
  private camionsUrl = 'https://jsonplaceholder.typicode.com/photos';
  private employeesUrl = 'http://localhost:8086/Efactory/employees/employees';
  private commandsUrl = 'http://localhost:8086/Efactory/commandes/commandes';
  private vehiculsUrl = 'http://localhost:8086/Efactory/camions/camions';
  private clientsUrl = 'http://localhost:8086/Efactory/clients/clients';
  private productsUrl = 'http://localhost:8086/Efactory/produit/produit';

  constructor(private http: HttpClient) { }

  IsLoggedIn() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  updateclient(id: any, value: any) {
    return this.http.put(`${this.clientsUrl}/${id}` , value);
  }
  updateproduct(id: any, value: any) {
    return this.http.put(`${this.productsUrl}/${id}` , value);
  }
  updatevehicle(id: any, value: any) {
    return this.http.put(`${this.vehiculsUrl}/${id}` , value);
  }
  updateemplyer(id: any, project: any){
    return this.http.put(`${this.employeesUrl}/${id}` , project);
  }
  // tslint:disable-next-line:typedef
  deleteclient(id: string) {
    return this.http.delete(`${this.clientsUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  deleteproduct(id: string) {
    return this.http.delete(`${this.productsUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  deletevehicle(id: string) {
    return this.http.delete(`${this.vehiculsUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  createclient(value: any): Observable <Object> {
    return this.http.post<any>( `${this.clientsUrl}`, value);
  }
  // tslint:disable-next-line:ban-types
  createproduct(value: any): Observable <Object> {
    return this.http.post<any>( `${this.productsUrl}`, value);
  }
  // tslint:disable-next-line:ban-types
  createvehicle(value: any): Observable <Object> {
    return this.http.post<any>( `${this.vehiculsUrl}`, value);
  }
  // tslint:disable-next-line:ban-types
  createemplyer(value: any): Observable <Object> {
    return this.http.post<any>( `${this.employeesUrl}`, value);
  }
  // tslint:disable-next-line:typedef
  deletemployee(id: string) {
    return this.http.delete(`${this.employeesUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  getAllEmployees(): Observable <any> {
    return this.http.get<any>( `${this.employeesUrl}`);
  }
  // tslint:disable-next-line:ban-types
  getAllProducts(): Observable <any> {
    return this.http.get<any>( this.productsUrl);
  }
  // tslint:disable-next-line:ban-types
  getAllclients(): Observable <any> {
    return this.http.get<any>( this.clientsUrl);
  }
  // tslint:disable-next-line:ban-types
  getAllvehiculs(): Observable <any> {
    return this.http.get<any>( this.vehiculsUrl);
  }
  // tslint:disable-next-line:ban-types
  getAllCommands(): Observable <any> {
    return this.http.get<any>( this.commandsUrl);
  }

  // tslint:disable-next-line:ban-types typedef
  login(user: Object): Observable <Object> {
    return this.http.post<any>(this.loginUrl, user);
  }
  // tslint:disable-next-line:ban-types
  register(user: Object): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, user);
  }
  // tslint:disable-next-line:ban-types
  getAllcamions(): Observable <Object> {
    return this.http.get<any>( this.camionsUrl);
  }
  // tslint:disable-next-line:ban-types
  altercamion(id: string, value: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, value);
  }

  // tslint:disable-next-line:ban-types
  deleteCamion(id: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, id);
  }

  // tslint:disable-next-line:ban-types
  createCamion(value: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, value);
  }


}
