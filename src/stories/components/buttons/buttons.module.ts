import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CneButtonsModule } from 'cne-material';
import { CneButtonsComponent } from './components/cne-buttons/cne-buttons.component';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    CneButtonsComponent
  ],
  imports: [
    CommonModule,
    CneButtonsModule,
  DxButtonModule
  ],
  exports:[]
})
export class ButtonsModule { }
