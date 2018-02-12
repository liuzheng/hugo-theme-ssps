import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';


import {AppComponent} from './app.component';
import {NavComponent} from './elements/nav/nav.component';
import {MaterialModule} from './material.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
