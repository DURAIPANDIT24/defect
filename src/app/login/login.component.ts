import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = "";

password ="";
invalidLogin: boolean|any;
  constructor(private hardcodedAuthenticationService :HardcodedAuthenticationService,private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    this.invalidLogin=false;
    this.router.navigate(['/createDefect']);
    }
    }

}
