import { Persona } from "../../persona/models/Persona";

export class Alumno extends Persona{

  public id: number;
  public legajo: string;
  public libro: string;
  public folio: string;

  public cod_matriculacion: string;
  public curso: string;
  public division: string;
  public estado: string

  constructor(){
    super()
  }

  static getInstance(){
    return new Alumno()
  }




}
