import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CneButtonModule } from 'projects/cne-material/src/lib/cne-button/cne-button.module';
import { CneTextBoxModule } from 'projects/cne-material/src/lib/cne-text-box/cne-text-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CneButtonModule,
    CneTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
