import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CneButtonModule } from 'projects/cne-material/src/lib/cne-button/cne-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CneButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
