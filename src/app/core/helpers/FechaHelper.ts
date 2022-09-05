import * as moment from "moment";

export class FechaHelper{

  static getNroDiaSemana(fecha: Date){
     let nroDia = 0;
     if(fecha.getDay() === 0){
        nroDia = 7;
     } else{
        nroDia = fecha.getDay();
     }
     return nroDia;
  }

  static obtenerCronogramaDeHorarios(hora_desde,hora_hasta,duracion_en_minutos:number): string[]{
    var entryHour = moment(hora_desde, 'hh:mm A');
    var exitHour = moment(hora_hasta, 'hh:mm A');
    var arrHorarios: string[] = [];
    var duration = moment.duration(exitHour.diff(entryHour)).asHours();
    exitHour = moment(hora_desde, 'hh:mm A').add(1, 'hours');
    for (let i = 0; i < duration; i++) {
        arrHorarios.push(
        entryHour.format('hh:mm').toString() +
          '-' +
          exitHour.format('hh:mm').toString()
      );
      entryHour = exitHour;
      exitHour = moment(exitHour).add(duracion_en_minutos, 'minutes');
    }
    return arrHorarios;
  }

}