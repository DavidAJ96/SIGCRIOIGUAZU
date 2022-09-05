import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
 import { catchError, retry } from 'rxjs/operators';
import { Notificacion } from '../helpers/notificacion';
declare var $: any;
@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor( ) {}

  handleError(error: HttpErrorResponse): Observable<any> {
    const notificacion = new Notificacion('bottom','center');
    if (error.status === 0) {
      // Se produjo un error de red o del lado del cliente. Manéjelo en consecuencia.
      console.error('ERROR:', "No se pudo establecer la conexion con el servidor");
      notificacion.error("Oops!","¡No tenes conexion a internet!")
    } else {
      // El backend devolvió un código de respuesta incorrecto.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal.
      console.error(
        `ERROR :${error.status}, Mensaje: `, error.error);


        if(error.status ===422){
          notificacion.info("Oops!",error.error.errores)
          return;
        }

        notificacion.error("Oops!","Ocurrio un error en el servidor. Comuniquese con el administrador")

    }
    // Devuelve un observable con un mensaje de error de cara al usuario.
    return throwError(
      'La Petición no se pudo realizar, Por favor intente nueva mente mas tarde.');
  }



  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let lcToken =  'A7R01a42S3t4s2RRFDBVAOSXIBFXWQOVPKGCRBIKZTUSFYBNLQVGSTTJSJTSFXZCNKKXFKHHQECXFHVIFZHOXWNB'



    //Obtenemos el Token
    let request = req;
    //Agregamos el content type si lo deseamos


    let header = new HttpHeaders({'content-type':'application/json','token':lcToken})


    request = req.clone({ headers:header});


    return next.handle(request).pipe(

      catchError(this.handleError) // luego maneja el error
    );;
  }
}
