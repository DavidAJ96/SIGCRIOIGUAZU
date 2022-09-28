import { Perfil } from "../../persona/models/perfil";

export class Alumno {

  public id: number;
  public legajo: string;
  public libro: string;
  public folio: string;
  public estado: string
  public persona: Perfil
  constructor(id: number, legajo: string, libro: string,folio:string,persona: Perfil, estado:string){
    this.id = id;
    this.legajo = legajo;
    this.libro = libro,
    this.folio = folio
    this.estado = estado
    this.persona = Perfil.getInstance(persona);
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
