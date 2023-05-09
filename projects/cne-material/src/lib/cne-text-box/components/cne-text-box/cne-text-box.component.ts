import { Component, Input } from '@angular/core';

@Component({
  selector: 'cne-text-box',
  templateUrl: './cne-text-box.component.html',
  styles: [
  ]
})
export class CneTextBoxComponent {
@Input()
mode:string="";

}
