import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneTextBoxComponent } from './components/cne-text-box/cne-text-box.component';
import { DxTextBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CneTextBoxComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule
  ],
  exports:[CneTextBoxComponent]
})
export class CneTextBoxModule { }
