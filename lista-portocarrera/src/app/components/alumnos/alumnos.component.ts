import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  subtitulo: string = "Lista de Estudiantes";
  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'Estela',
      apellido: 'Davis',
      edad: 23,
      estadoActivo:false,
      carrera: 1
    },
    {
      nombre: 'Jose',
      apellido: 'Portocarrera',
      edad: 28,
      estadoActivo: true,
      carrera: 2
    },
    {
      nombre: 'Elsita',
      apellido: 'Anangono',
      edad: 29,
      estadoActivo:true,
      carrera: 2
    },
    {
      nombre: 'Valeska',
      apellido: 'Scott',
      edad: 19,
      estadoActivo:true,
      carrera: 3
    },
    {
      nombre: 'Francheska',
      apellido: 'Johnson',
      edad: 17,
      estadoActivo:true,
      carrera: 3
    }
  ]
}
