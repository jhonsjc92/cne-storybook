import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { event } from 'devextreme/events';

@Component({
  selector: 'cne-drop-down-box',
  templateUrl: './cne-drop-down-box.component.html',
  styleUrls: ['./cne-drop-down-box.component.css']
})
export class CneDropDownBoxComponent {
  @Output()
  valueSelect = new EventEmitter<string>();

  @Output()
  c_onSelectionChanged = new EventEmitter<any>();
  @Output()
  c_onSelectionChanged2 = new EventEmitter<event>();

  selectedFruit = 'Apples';
  isDropDownBoxOpened = false;
  nombrese = '';
  @Input()
  dataSource = ['hola'];
  onItemDeleting(e: { cancel: boolean; }) {
    if (this.dataSource.length === 1) {
      e.cancel = true;
    }
  }
  changeDropDownBoxValue(args: { addedItems: string[]; }) {
    this.selectedFruit = args.addedItems[0];
    this.isDropDownBoxOpened = false;
    this.valueSelect.emit(args.addedItems[0]);
    this.c_onSelectionChanged.emit(args);

  }

  public get valuecne(): any {
    return this.selectedFruit;
  };
  public set valuecne(selectedFruit: any) {
    this.selectedFruit = selectedFruit;
  };
}

