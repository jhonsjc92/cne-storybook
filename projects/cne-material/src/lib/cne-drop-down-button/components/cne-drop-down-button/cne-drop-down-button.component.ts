import { Component, Input } from '@angular/core';
import { CneDropDownButton } from '../../interfaces/cne-drop-down-button.interfaces';

@Component({
  selector: 'cne-drop-down-button',
  templateUrl: './cne-drop-down-button.component.html',
  styleUrls: ['./cne-drop-down-button.component.css']
})
export class CneDropDownButtonComponent {
  onButtonClick(e:any) {
    console.log("onButtonClick");
  }

  onItemClick(e:any) {
   console.log("onItemClick");
  }
  @Input()
  dataSource:CneDropDownButton[]=[]
 
}
