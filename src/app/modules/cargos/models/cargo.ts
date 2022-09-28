export class Cargo {
  private _id: number;
  private _codigo: null;
  private _fecha_alta: string;
  private _nombre_cargo: string;
  private _estado: string;

  constructor(
    id: number,
    codigo: null,
    fecha_alta: string,
    nombre_cargo: string,
    estado: string
  ) {
    this._id = id;
    this._codigo = codigo;
    this._fecha_alta = fecha_alta;
    this._nombre_cargo = nombre_cargo;
    this._estado = estado;
  }

  static getInstance(obj: Object){

    return obj===undefined?null: new Cargo(
      obj['id'],
      obj['codigo'],
      obj['fecha_alta'],
      obj['nombre_cargo'],
      obj['estado'],
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
   * Getter codigo
   * @return {null}
   */
  public get codigo(): null {
    return this._codigo;
  }

  /**
   * Getter fecha_alta
   * @return {string}
   */
  public get fecha_alta(): string {
    return this._fecha_alta;
  }

  /**
   * Getter nombre_cargo
   * @return {string}
   */
  public get nombre_cargo(): string {
    return this._nombre_cargo;
  }

  /**
   * Getter estado
   * @return {string}
   */
  public get estado(): string {
    return this._estado;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter codigo
   * @param {null} value
   */
  public set codigo(value: null) {
    this._codigo = value;
  }

  /**
   * Setter fecha_alta
   * @param {string} value
   */
  public set fecha_alta(value: string) {
    this._fecha_alta = value;
  }

  /**
   * Setter nombre_cargo
   * @param {string} value
   */
  public set nombre_cargo(value: string) {
    this._nombre_cargo = value;
  }

  /**
   * Setter estado
   * @param {string} value
   */
  public set estado(value: string) {
    this._estado = value;
  }
}
