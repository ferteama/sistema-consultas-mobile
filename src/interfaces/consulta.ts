import { statusConsulta } from './../types/statusConsulta';
import { Paciente } from "../types/paciente";
import { Medico } from "./medico";

export interface Consulta {
    id : number;
    medico : Medico;
    paciente : Paciente;
    data : Date;
    valor : number;
    status : statusConsulta;
    observacoes? : string;
}