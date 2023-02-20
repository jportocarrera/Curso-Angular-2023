import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombres'
})
export class NombresPipe implements PipeTransform {

  transform(a: Alumno): string {
    return a.nombre + ' / ' + a.apellido ;
  }

}
