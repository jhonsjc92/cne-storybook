import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CneButtonModule } from 'projects/cne-material/src/lib/cne-button/cne-button.module';
import { ScneButtonComponent } from './components/cne-buttons/scne-buttons.component';

@NgModule({
  declarations: [
    ScneButtonComponent
  ],
  imports: [
    CommonModule,  
    CneButtonModule
  ],
  exports:[ScneButtonComponent]
})
export class ButtonsModule { }
