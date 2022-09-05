import { HttpClient } from "@angular/common/http";
import { from, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { CrudOperations } from "../interfaces/crud-operations";
import {map} from 'rxjs/operators'
import { BaseApi } from "../interfaces/baseApi";
import { Paginator } from "../interfaces/pagination";
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {
  filtros: Map<string,any>
  paginator: Paginator= {
    current_page: 1,
    to: 0,
    total: 0,
    from:0,
    per_page:15
  };
  search:string =''
  subject: Subject<ID>;
  constructor(
    protected _http: HttpClient,
    protected _base: string,
    protected modelo: any = null
  ) {
    this.subject = new Subject();
    this._base = environment.api +'/'+_base

    this.filtros = new Map()
  }

  protected setPaginator(item: BaseApi<T>){
    this.paginator = {
      current_page:   item.current_page,
      from:           item.from,
      to:             item.to,
      total:          item.total,
      per_page:       item.per_page
    }
  }


  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  setFilter(cCampo: string, cValor:string){
    this.filtros.set(cCampo,cValor);
  }

  getFilters(){
    let filtro ='';
    for (let key of this.filtros.keys()) {
      filtro +=key+'='+this.filtros.get(key)+'&';
    }
    return filtro;
  }

  protected get url(): string {
    const nroPag: number = this.paginator=== undefined? 1: this.paginator.current_page;
    return  this._base+'?page='+nroPag+'&search='+this.search+"&per_page="+this.paginator.per_page+"&"+this.getFilters();
  }


  findAll(): Observable<T[]> {
    console.log(this.url)
    return this._http.get<BaseApi<T>>(this.url).pipe(map((res:BaseApi<T>)=>{
      this.setPaginator(res)
      if(this.modelo === null){

        return res.data
      }

      return res.data.map(obj=>{return Object.assign(this.modelo.getInstance(),obj)});
    }))
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
	}

  exportPdf(){
    return this._http.get(`${this.url}&export=pdf`,{responseType: 'blob'});

  }


}
