import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {
  formularioLogin: FormGroup;
  
  constructor(){
    let correoValido: string = '^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$'
    let controles: any = {
      correo: new FormControl('',[Validators.required, Validators.pattern(correoValido)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(7)]),
      aceptaTerminos: new FormControl(false,[])
    }
    this.formularioLogin = new FormGroup(controles)
  }
  login(){
    /*console.log(this.formularioLogin)*/
    if(this.formularioLogin.valid){
      console.log("Por fin");
    } else {
      console.log("Que lio")
    }
  }
}
