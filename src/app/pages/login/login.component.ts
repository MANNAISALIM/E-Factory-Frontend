import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private adminservice: AdminService , private fb: FormBuilder , public router: Router, private toastr: ToastrService) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required , Validators.email]],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
    const isLoggedin = this.adminservice.IsLoggedIn();
    if (isLoggedin) {
      this.router.navigate(['/', 'dashboard']);
    }
  }
  login() {
    let user;
    user = {

      username: this.angForm.get('email').value,
      password: this.angForm.get('password').value,
      // password: bcrypt.hashSync( this.angForm.get('pass').value, salt),

    };
      this.adminservice.login(user).subscribe(
        res => {
          // @ts-ignore
          const token = res.accessToken ;
          localStorage.setItem('accessToken', token);
          this.router.navigate(['/', 'dashboard']);
        },
        err => {
          console.log(err.message);
          this.toastr.error('Echec !');
        }
      );
    }

  }
