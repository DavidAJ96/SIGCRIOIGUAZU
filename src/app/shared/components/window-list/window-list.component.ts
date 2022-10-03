import { Component, OnInit, ChangeDetectionStrategy,Input,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-window-list',
  templateUrl: './window-list.component.html',
  styleUrls: ['./window-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowListComponent implements OnInit {
  @Input() dtOptions: DataTables.Settings = {}
  @Input() titulo:string = ''
  @Input() btnAdd:boolean = true
  @Input() btnAddText:string = 'Agregar Nuevo'
  @Input() btnAddIcon:string = 'plus'
  @Output() btnExportPDF = new EventEmitter<void>();
  @ViewChild('midata') datatable: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  public exportPDF(){
    var rows = document.getElementsByTagName("table");


    let style = `
    <style type="text/css" media="print">
        @page
        {
            size: auto; /* auto is the initial value */
            margin-top: 10mm;
            margin-bottom: 10mm;
            margin-right: 10mm;
            margin-left: 10mm;
        }

        table.report-container {
          page-break-after:always;

      }
      thead.report-header {
          display:table-header-group;
      }
      tfoot.report-footer {
          display:table-footer-group;


          bottom: 0;
      }
    </style>
    <style>
    /** Define the margins of your page **/
    /** Define the margins of your page **/
  .main{
    height:70%;
  }

   header{

           top: 0px;
           left: 0px;
           right: 0px;
           height: 100px;
       }
       .miheader {
           /** Extra personal styles **/
           height: 50px;
           background-color: #03a9f4;
           color: white;
           text-align: center;
           line-height: 35px;
       }
       table{
           width:100%;
       }

       footer {
        clear: both;

           bottom: 0px;
           left: 0px;
           right: 0px;
           height: 40px;

           /** Extra personal styles **/
           background-color: #03a9f4;
           color: white;
           text-align: center;
           line-height: 35px;
       }
       #datatable {
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;


}

#datatable td, #datatable th {
border: 1px solid #ddd;
padding: 8px;
font-size:10pt;
}



#datatable tr:nth-child(even){background-color: #f2f2f2;}

#datatable tr:hover {background-color: #ddd;}

#datatable th {
padding-top: 12px;
padding-bottom: 12px;
margin-bottom: 40mm;
text-align: left;
background-color: #2F75B5;
color: white;
}
   </style>
    `


   let html = `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JsPDF .fromHTML() - An Example</title>
      ${style}
  </head>
  <body>


<table class="report-container">
<thead class="report-header">
  <tr>
     <th class="report-header-cell">
        <div class="header-info">
        <header>
    <div class="miheader">
        Our Code World
    </div>
    <h3 style="text-align:center;"> report title</h3>

</header>


        </div>
      </th>
   </tr>
 </thead>
 <tfoot class="report-footer">
   <tr>
      <td class="report-footer-cell">
        <div class="footer-info">

<footer>
<hr>
Copyright &copy;
</footer>
        </div>
       </td>
   </tr>
 </tfoot>
 <tbody class="report-content">
   <tr>
      <td class="report-content-cell">
         <div class="main">
          <table id="datatable">
            ${this.datatable.nativeElement.innerHTML}
          </table>
          <br> <br>
         </div>
       </td>
    </tr>
  </tbody>
</table>
  </body>
  </html>`;
  var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
  win.document.write(html);
  }

}
