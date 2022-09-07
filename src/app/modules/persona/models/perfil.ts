import { Localidad } from "../../ubicacion/localidad/models/localidad";

export class Perfil{


  constructor(
    public nacionalidad: string,
    public documento: string,
    public nombre: string,
    public apellidos: string,
    public fechaNac: string,
    public lugarNac: string,
    public calle: string,
    public altura: string,
    public piso: string,
    public depto: string,
    public barrio: string,
    public localidad: Localidad,
    public telefono: string,
    public created_at: string,
    public updated_at: string,
    public foto: string,
  ){}

  static getInstance(obj: Object){
    return new Perfil(
      obj['nacionalidad'],
      obj['documento'],
      obj['nombre'],
      obj['apellidos'],
      obj['fechaNac'],
      obj['lugarNac'],
      obj['calle'],
      obj['altura'],
      obj['piso'],
      obj['depto'],
      obj['barrio'],
      obj['localidad'],
      obj['telefono'],
      obj['created_at'],
      obj['updated_at'],
      obj['foto'],
    )
  }


  public get ApellidoNombre(): string{
    return `${this.apellidos} ${this.nombre}`
  }

  public get domicilio(): string{

    if(this.calle ==='S/D' || this.calle ===null || this.calle ===''){
        return ''
    }

    let dom = this.calle;
    dom+=this.altura==='S/D' || this.altura.includes('-') || this.altura ===null || this.altura ===''?'':' N° '+this.altura
    dom+=this.piso==='S/D' || this.piso.includes('-') ||this.piso ===null || this.piso ===''?'':' Piso:  '+this.piso
    dom+=this.depto==='S/D' || this.depto.includes('-') ||this.depto ===null || this.depto ===''?'':' Depto: '+this.depto
    return dom
  }


}
