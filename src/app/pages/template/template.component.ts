import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {
  usuario={
    nombre:'',
    apellido:'',
    pais:'',
    correo:''
  }
  paises:any[]=[];
  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
    this.paisServices.getPaises().subscribe(paises=>{
      this.paises = paises;
      this.paises.unshift({
        nombre:'[Selecciones un Pais]',
        codigo:''
      })
    });
  }
  guardar(forma:NgForm){
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control=>{
        control.markAsTouched()
      })
      return;
    }
    console.log(forma.value);
  }

}
