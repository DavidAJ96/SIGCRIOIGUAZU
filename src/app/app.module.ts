import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './modules/persona/persona.component';
import { LayoutModule } from './layout/layout.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppInterceptor } from './core/interceptors/app.interceptor';
import { FormPersonaComponent } from './modules/persona/components/form-persona/form-persona.component';
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true}],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
