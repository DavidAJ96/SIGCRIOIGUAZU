export class Curso {
  id:                 number;
  curso:              string;
  division:           string;
  preceptor:          string;
  tutor:              string;
  orientacion:        string;
  created_at:         string;
  updated_at:         string;
  estado:             string;
  nombre_orientacion: string;

  static getInstance(){
    return new Curso();
  }

  get CursoDivision(){
    return `${this.curso} ${this.division}`
  }

}
