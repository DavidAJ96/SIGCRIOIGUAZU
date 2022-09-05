
declare var $: any
export class Notificacion{
  private _posicion: string;
  private _alineacion: string;

  constructor(posicion,alineacion){
    this.posicion =posicion;
    this.alineacion = alineacion;
  }

  buildNotificacion(title,icon,message,type): void {
    $.notify({

      title: `<strong>${title}</strong>`,
      icon: `glyphicon glyphicon-${icon}`,
      message: message
    },{type: type,placement:{align:this.alineacion,from:this.posicion}})
  }

  success(cTitulo: string, cMessage: string){
    this.buildNotificacion(cTitulo,"ok",cMessage,'success');
  }

  error(cTitulo: string, cMessage: string){
    this.buildNotificacion(cTitulo,"remove",cMessage,'danger');
  }

  info(cTitulo: string, cMessage: string){
    this.buildNotificacion(cTitulo,"ok",cMessage,'info');
  }


    /**
     * Getter posicion
     * @return {string}
     */
	public get posicion(): string {
		return this._posicion;
	}

  /**
   * Getter alineacion
   * @return {string}
   */
	public get alineacion(): string {
		return this._alineacion;
	}

  /**
   * Setter posicion
   * @param {string} value
   */
	public set posicion(value: string) {
		this._posicion = value;
	}

  /**
   * Setter alineacion
   * @param {string} value
   */
	public set alineacion(value: string) {
		this._alineacion = value;
	}



}
