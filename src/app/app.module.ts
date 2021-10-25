import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './About/about/about.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child2Module } from './parent/child2/child2.module';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    Child2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
