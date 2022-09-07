export class Curso {


  constructor(
    public id:                 number,
    public curso:              string,
    public division:           string,
    public preceptor:          string,
    public tutor:              string,
    public orientacion:        string,
    public created_at:         string,
    public updated_at:         string,
    public estado:             string,
    public nombre_orientacion: string,
  ){

  }

  static getInstance(obj: Object){
    return new Curso(
      obj['id'],
      obj['curso'],
      obj['division'],
      obj['preceptor'],
      obj['tutor'],
      obj['orientacion'],
      obj['created_at'],
      obj['updated_at'],
      obj['estado'],
      obj['nombre_orientacion'],
    );
  }

  get CursoDivision(){
    return `${this.curso} ${this.division}`
  }

}
