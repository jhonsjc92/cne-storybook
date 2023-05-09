import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneDropDownButtonComponent } from './components/cne-drop-down-button/cne-drop-down-button.component';
import { DxDropDownButtonModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CneDropDownButtonComponent
  ],
  imports: [
    CommonModule,
    DxDropDownButtonModule
  ],exports:[CneDropDownButtonComponent]
})
export class CneDropDownButtonModule { }
