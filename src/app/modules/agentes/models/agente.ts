import { Perfil } from '../../persona/models/perfil';

export class Agente {
  private _id: number;
  private _id_persona: string;
  private _fecha_ingreso: string;
  private _persona: Perfil;
  private _created_at: null;
  private _updated_at: null;
  private _deleted_at: null;

  constructor(
    id: number,
    id_persona: string,
    fecha_ingreso: string,
    persona: Perfil,
    created_at: null,
    updated_at: null,
    deleted_at: null
  ) {
    this._id = id;
    this._id_persona = id_persona;
    this._fecha_ingreso = fecha_ingreso;
    this._persona = persona;
    this._created_at = created_at;
    this._updated_at = updated_at;
    this._deleted_at = deleted_at;
  }

  static getInstance(obj: Object){
     return new Agente(
      obj['id'],
      obj['id_persona'],
      obj['fecha_ingreso'],
      Perfil.getInstance(obj['persona']),
      obj['created_at'],
      obj['updated_at'],
      obj['deleted_at']
     )
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter id_persona
   * @return {string}
   */
  public get id_persona(): string {
    return this._id_persona;
  }

  /**
   * Getter fecha_ingreso
   * @return {string}
   */
  public get fecha_ingreso(): string {
    return this._fecha_ingreso;
  }

  /**
   * Getter persona
   * @return {Perfil}
   */
  public get persona(): Perfil {
    return this._persona;
  }

  /**
   * Getter created_at
   * @return {null}
   */
  public get created_at(): null {
    return this._created_at;
  }

  /**
   * Getter updated_at
   * @return {null}
   */
  public get updated_at(): null {
    return this._updated_at;
  }

  /**
   * Getter deleted_at
   * @return {null}
   */
  public get deleted_at(): null {
    return this._deleted_at;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter id_persona
   * @param {string} value
   */
  public set id_persona(value: string) {
    this._id_persona = value;
  }

  /**
   * Setter fecha_ingreso
   * @param {string} value
   */
  public set fecha_ingreso(value: string) {
    this._fecha_ingreso = value;
  }

  /**
   * Setter persona
   * @param {Perfil} value
   */
  public set persona(value: Perfil) {
    this._persona = value;
  }

  /**
   * Setter created_at
   * @param {null} value
   */
  public set created_at(value: null) {
    this._created_at = value;
  }

  /**
   * Setter updated_at
   * @param {null} value
   */
  public set updated_at(value: null) {
    this._updated_at = value;
  }

  /**
   * Setter deleted_at
   * @param {null} value
   */
  public set deleted_at(value: null) {
    this._deleted_at = value;
  }
}
