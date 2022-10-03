import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { DataTablesModule } from 'angular-datatables';
import { BoxComponent } from './components/box/box.component';
import { WindowListComponent } from './components/window-list/window-list.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ContentHeaderComponent, BoxComponent, WindowListComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    NgSelectModule
  ],
  exports: [ContentHeaderComponent,DataTablesModule,BoxComponent, WindowListComponent,NgSelectModule]
})
export class SharedModule { }
