import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent, LeftSidebarComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MainLayoutComponent, AuthLayoutComponent]
})
export class LayoutModule { }
