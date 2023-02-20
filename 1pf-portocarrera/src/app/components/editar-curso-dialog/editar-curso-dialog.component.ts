import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css']
})
export class EditarCursoDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      activo: new FormControl(data.activo)
    })
  }
}
