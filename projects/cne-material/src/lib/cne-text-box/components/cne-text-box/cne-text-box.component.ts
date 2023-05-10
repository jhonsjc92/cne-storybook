import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cne-text-box',
  templateUrl: './cne-text-box.component.html',
  styles: [
  ]
})
export class CneTextBoxComponent {
  @Input()
  mode: string = "";

  @Input()
  value: string = "";
  @Input()
  maxLength: number = 999999999;

  @Input()
  mask: string = "";

  @Input()
  name: string = "";
  @Input()
  label:string="";
  @Input()
  readOnly :boolean=false;
  @Output()
  onEnterKey?= new EventEmitter<any>();

  @Output()
  onValueChanged?= new EventEmitter<any>();

  @Output()
  onKeyUp?= new EventEmitter<any>();

  @Output()
  onKeyDown?= new EventEmitter<any>();
  @Output()
  public get values() {
    return this.value;
  }
  public set values(value: string) {
    this.value = value;
  }
}
