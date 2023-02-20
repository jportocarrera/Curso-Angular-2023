import { profesor } from "./profesor";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: profesor;
    inscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}