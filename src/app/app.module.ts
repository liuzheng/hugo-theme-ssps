import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {NavComponent} from './elements/nav/nav.component';
import {MaterialModule} from './material.component';
import {TransPipe} from './trans.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TransPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
