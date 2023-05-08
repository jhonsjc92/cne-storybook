import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneButtonComponent } from './components/cne-button/cne-button.component';
import { DxButtonModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CneButtonComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule
  ],
  exports:[CneButtonComponent]
})
export class CneButtonModule { }
