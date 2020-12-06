import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;

  constructor(public router: Router, private fb: FormBuilder , private toastr: ToastrService, private adminservice: AdminService ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required , Validators.email]],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
    const isLoggedin = this.adminservice.IsLoggedIn();
    if(isLoggedin){
      this.router.navigate(['/', 'dashboard']);
    }
  }

  register() {
    let user;
    user = {
      //name: this.angForm.get('name').value,
      username: this.angForm.get('email').value,
      password: this.angForm.get('password').value,
      // password: bcrypt.hashSync( this.angForm.get('pass').value, salt),
    };
    this.adminservice.register(user).subscribe(
      res => {
        this.toastr.success('Succefully registred ');
        this.router.navigate(['/', 'login']);
        this.toastr.warning('Try to login now ');
      },
      err => {
        console.log(err);
        alert('une erreur s\'est produite! ');
      }
    );
  }
}
