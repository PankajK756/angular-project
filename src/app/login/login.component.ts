import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoginService } from './login.service';
import constants from '../../assets/constant';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private uc: UserService, private fb1: FormBuilder, private r: Router) { }

  role: any;
  loginTitle: any;
  loginImg: any;
  loginForm: any;
  placeholder: any;
  errorMessage: any;
  coacharray: any;
  userarray: any;
  arraytouse: any;
  signUp!: FormGroup;
  logname: any;
  logpwd: any
  navigateto: any;
  navuser: boolean = true;

  loginchk() {
    this.logname = this.signUp.get('name')!.value;
    this.logpwd = this.signUp.get('password')!.value;
    console.log(this.role);
    if (this.role.role == ":user") {
      this.arraytouse = this.userarray;
      this.navuser = true;
      this.navigateto = './user';
    }
    else {
      this.arraytouse = this.coacharray;
      this.navuser = false;
      this.navigateto = './coaches'
    }
    console.log(this.arraytouse.length + "Array size is");
    for (let i = 0; i < this.arraytouse.length; i++) {
      console.log("User Name is :" + this.arraytouse[i]["username"]);
      if (this.logname == this.arraytouse[i]["username"] &&
        this.logpwd == this.arraytouse[i]["pwd"]) {
        this.navTo();
      }

      else {
        this.errorMessage = "Enter Valid Username and Password";
      }
    }
    this.arraytouse = [];
    console.log(this.signUp.get('name')!.value);
  }
  navTo() {
    if (this.navigateto = './user') {
      this.r.navigate(['./user']);
    }
    else if (this.navigateto = './coaches') {
      this.r.navigate(['./coaches']);
    }
  }

    ngOnInit(){
      this.coacharray = [];
      this.userarray = [];
      this.coacharray = this.uc.coachusers;
      this.userarray = this.uc.users;
      this.signUp = this.fb1.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
      });

      this.route.params.subscribe(
        params =>
        {
        this.role=params; 
        console.log(this.role);
        })
        if (this.role.role == ":user")
        {
        console.log(this.role);
         this.loginTitle="Login as User";
          this.loginImg= "assets/Images/UserLogin.jpg";
          this.placeholder="User Id"; 
          this.role="";
        }
        else if(this.role.role ==":coaches")
        {
        console.log(this.role); 
        this.loginTitle="Login as Life Coach";
         this.loginImg="assets/Images/LifeCoachLogin.jpg";
          this.placeholder="Coach Id";
           this.role="";
        }}}