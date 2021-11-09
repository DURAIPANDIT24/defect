import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = "";
password ="";
invalidLogin: boolean|any;
constructor(private router: Router,private hardcodedAuthenticationService: HardcodedAuthenticationService,public dialog: MatDialog) { }
ngOnInit(){}
handleLogin(){
 if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    this.router.navigate(['createDefect'])
    this.invalidLogin=false;
  }
  else{
     this.dialog.open( LoginPopupComponent );
  }
}
}
