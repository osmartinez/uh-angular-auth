import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {

  email: string = ""
  pwd: string = ""
  firstname: string = ""
  lastname: string = ""
  age: number = 18

  constructor(private authService: AuthService){}

  registrar(){
    this.authService.registrar(
      this.email,
      this.pwd,
      this.firstname,
      this.lastname,
      this.age
    ).subscribe(data=>{
      alert('usuario registrado')
    },
    error=>{
      alert('error al registrar')
    })
  }

}
