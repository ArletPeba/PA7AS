import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isloggedIn: boolean = false;

login (email:string, password: string): boolean{
  if (email == "arletpeba@gmail.com" && password == "12345"){
  this.isloggedIn=true;
}else{
  this.isloggedIn = false;
}
return this.isloggedIn;
}
isUserLoggedIn(){
  return this.isloggedIn;
}
}