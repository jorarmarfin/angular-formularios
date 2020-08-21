import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErroValidate {
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }
  noHerrera(control:FormControl):{[s:string]:boolean}{
    // el signo ? hace que sea condicional su existencia
    if (control.value?.toLowerCase() === 'mayta') {

      return {
        noHerrera:true
      }
    }
    return null;

  }
  passwordsIguales(pass1Name:string,pass2Name:string){
    return (formGroup:FormGroup)=>{
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];
      if (pass1Control.value === pass2Control) {
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual:true});
      }

    }
  }
  existeUsuarios(control:FormControl):Promise<ErroValidate> | Observable<ErroValidate>{
    if(!control.value){
      return Promise.resolve(null);
    }
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value=== 'strider'){
          resolve({existe:true})
        }else{
          resolve(null);
        }
      }, 3500);
    });
  }







}
