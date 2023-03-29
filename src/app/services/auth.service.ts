import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(email: string, pwd: string): Observable<any>{
    return this.http.post("http://localhost:3000/login",
    {
      email:email,
      password:pwd 
    })
  }

  registrar(email:string, pwd: string, firstname: string, lastname: string, age: number){
    return this.http.post("http://localhost:3000/register", 
    {
      email: email,
      password: pwd,
      firstname: firstname,
      lastname: lastname,
      age: age,
    }
    )
  }

  logout(){
    this.cookies.delete("user")
  }

  setUser(user: any){
    this.cookies.set("user",JSON.stringify(user))
  }

  getUser(){
    try {
      return JSON.parse(this.cookies.get("user"))
    } catch (error) {
      return null
    }
  }

  estaLoggeado():boolean{
    return this.cookies.check("user")
  }
}
