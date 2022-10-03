import { Persona } from "../../persona/models/persona";

export class Alumno {

  public id: number;
  public legajo: string;
  public libro: string;
  public folio: string;
  public estado: string
  public persona: Persona
  constructor(id: number, legajo: string, libro: string,folio:string,persona: Persona, estado:string){
    this.id = id;
    this.legajo = legajo;
    this.libro = libro,
    this.folio = folio
    this.estado = estado
    this.persona = Persona.getInstance(persona);
  }

  static getInstance(obj: Object){

     return new Alumno(
      obj['id'],
      obj['legajo'],
      obj['libro'],
      obj['folio'],
      obj['persona'],
      obj['estado']
     )
  }




}
