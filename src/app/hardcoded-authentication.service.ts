import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:any,password:any){

    if(username==="finzly" && password==="finzly"){

      sessionStorage.setItem('authenticaterUser', username);
      return true;

    }

    return false;

  }

  isUserLoggedIn(){

    let user = sessionStorage.getItem('authenticaterUser');

    if(user!==null){

      return true

    }else{

      return false

    }



  }
}
