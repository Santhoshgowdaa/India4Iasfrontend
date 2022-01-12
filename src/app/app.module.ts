import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddHeaderInterceptor } from './@core/interceptors/add-httpheader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
