import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CneButton } from '../../interfaces/cne-button.interfaces';

@Component({
  selector: 'cne-button',
  templateUrl: './cne-button.component.html',
  styleUrls: ['./cne-button.component.css']
})
export class CneButtonComponent implements OnInit {
  ngOnInit(): void {
    this.selectedAttributeButton = this.attributeButton.filter(res => res.idButton === this.idButton)[0];
  }

  @Input()
  public idButton: number = 1;
  public selectedAttributeButton: CneButton = { text: '', icon: '', idButton: 0 };
  public attributeButton: CneButton[] = [{
    idButton: 1,
    text: "Guardar",
    icon: 'save',
  },
  {
    idButton: 2,
    text: "Actualizar",
    icon: 'activefolder',

  },
  {
    idButton: 3,
    text: "Eliminar",
    icon: 'trash',

  },
  {
    idButton: 4,
    text: "Editar",
    icon: 'edit',

  }];

  @Input()
  typeButton: 'primary' | 'secondary' = 'primary';

  @Input()
  sizeButton: 'small' | 'medium' | 'large' = 'medium';

  @Output()
  c_onClick = new EventEmitter<any>();

  onClick(event: any) {
    console.log("hola")
    this.c_onClick.emit(event);
  }

  public get classes(): string {
    const mode = this.typeButton === 'primary' ? 'cne-button-primary' : 'cne-button-secondary';
    return mode;
  }
}
