import { CrudService } from "../services/crud_service";
import { DatatableLang } from 'src/environments/DatatableLang';
import {Component,OnInit} from '@angular/core'
@Component({
  template: ''
})
export abstract class GenericListPage<T,K> implements OnInit  {
  dtOptions: DataTables.Settings = {};
  protected columns: DataTables.ColumnSettings[]
  constructor(protected servicio: CrudService<T,K>){

  }

  ngOnInit(): void {
    this.DataTableInit();
  }

  setFilter(campo:string,valor: string){
    this.servicio.setFilter(campo,valor);
    $('#datatable').DataTable().ajax.reload();


  }


  /**
   *  Inicializador del datatable
   */
  DataTableInit(){
    this.SetColumns();
    this.addCrudButtons();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: this.servicio.paginator.per_page,
      language:DatatableLang,
      responsive:true,
      processing: true,
      serverSide:true,
      scrollX: true,

      autoWidth:true,
      ajax: (dataTablesParameters: any, callback) => {
        if(dataTablesParameters.start < 1){
          this.servicio.paginator.current_page = 1
       } else {
         this.servicio.paginator.current_page = Math.floor((dataTablesParameters.start +15)/ this.servicio.paginator.per_page)

       }
       this.servicio.paginator.per_page = dataTablesParameters.length
       this.servicio.search = dataTablesParameters.search.value
        this.servicio.findAll().subscribe(resp => {

            callback({
              recordsTotal:this.servicio.paginator.total -15,
              recordsFiltered: this.servicio.paginator.total,
              data: resp
            });
          });
      },
      columns:this.columns
    };
  }

  addCrudButtons(){
    this.columns.push( {
      title: "",
      data: null,
      orderable: true,
      render: (data, type, full) => `<button class="btn btn-sm btn-success " name="btnEdit" value="data"><i class="fa fa-edit"></i>&nbsp;Editar</button>
      &nbsp;<button class="btn btn-sm btn-danger deleteButton" value="${full.id}"><i class="fa fa-trash"></i>&nbsp;Borrar</button>  `
    })

  }


  ngAfterViewInit(): void {
    var self = this

    document.addEventListener('click', function (e: any) {
      console.log(e)
      if (e.target.classList.contains('deleteButton')) {
        self.edit(e.target.value)
      }
    });
  }
  edit(test){
    console.log(test)
  }
  abstract SetColumns(): void;


}
