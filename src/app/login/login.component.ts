import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: User;
  error: string;

  enteredUserName: String;
  enteredPassword: String;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
  }

  login() {

    this.enteredUserName = this.user.userName;
    this.enteredPassword = this.user.password;



  }

}
