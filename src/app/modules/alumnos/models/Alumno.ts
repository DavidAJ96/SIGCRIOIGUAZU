import { Perfil } from "../../persona/models/perfil";

export class Alumno {

  public id: number;
  public legajo: string;
  public libro: string;
  public folio: string;
  public estado: string
  public perfil: Perfil
  constructor(id: number, legajo: string, libro: string,folio:string,perfil: Perfil, estado:string){
    this.id = id;
    this.legajo = legajo;
    this.libro = libro,
    this.folio = folio
    this.estado = estado
    this.perfil = Perfil.getInstance(perfil);
  }

  static getInstance(obj: Object){
     return new Alumno(
      obj['id'],
      obj['legajo'],
      obj['libro'],
      obj['folio'],
      obj['perfil'],
      obj['estado']
     )
  }




}
