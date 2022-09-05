import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { DataTablesModule } from 'angular-datatables';
import { BoxComponent } from './components/box/box.component';
import { WindowListComponent } from './components/window-list/window-list.component';



@NgModule({
  declarations: [ContentHeaderComponent, BoxComponent, WindowListComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [ContentHeaderComponent,DataTablesModule,BoxComponent, WindowListComponent]
})
export class SharedModule { }
