import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
//reactive form
import { ReactiveFormsModule } from '@angular/forms';
//http client
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    AboutComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
