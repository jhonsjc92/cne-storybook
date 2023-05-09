import { NgModule } from '@angular/core';
import { CneMaterialComponent } from './cne-material.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CneMaterialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CneMaterialComponent
  ]
})
export class CneMaterialModule { }
