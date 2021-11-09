import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  button="createDefect"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(){

this.router.navigate(['/createDefect'])
  }
  navigatelistdefect(){

    this.router.navigate(['/listDefect'])
      }
      navigateLogin(){
        this.router.navigate(['/login'])
      }
      logout(){
        sessionStorage.clear();
        this.router.navigate(['/login'])
      }
}
