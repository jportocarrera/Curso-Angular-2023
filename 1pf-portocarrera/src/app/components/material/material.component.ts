import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  alumno: Alumno[] = [
    {
      nombre: 'José', 
      apellido: 'Portocarrera',
      facultad: 'Computer Scince', 
      activo: true,
      fechaInicio: new Date(2007,8,20)
    },
    {
      nombre: 'Gabriel', 
      apellido: 'Burgos',
      facultad: 'Computer Scince', 
      activo: true,
      fechaInicio: new Date(207,11,1)
    },
    {
      nombre: 'Lili', 
      apellido: 'Solis',
      facultad: 'Electrónica', 
      activo: true,
      fechaInicio: new Date(2019,10,7)
    },
    {
      nombre: 'Douglas', 
      apellido: 'Martinez',
      facultad: 'Computer Scince', 
      activo: false,
      fechaInicio: new Date(2022,0,15)
    }
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumno);
  columnas: string[]= ['nombre','facultad','activo','fechaInicio','acciones']

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(element: Alumno){
    //console.log('Abriendo Modal', element);
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: element
    });
    
  }
}
