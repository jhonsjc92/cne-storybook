import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneDropDownBoxComponent } from './components/cne-drop-down-box/cne-drop-down-box.component';
import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CneDropDownBoxComponent
  ],
  imports: [
    CommonModule,
    DxDropDownBoxModule,
    DxListModule,
    FormsModule,
  ],
  exports:[CneDropDownBoxComponent]
})
export class CneDropDownBoxModule { }
