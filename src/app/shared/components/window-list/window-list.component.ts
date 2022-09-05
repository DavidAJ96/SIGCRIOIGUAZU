import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
