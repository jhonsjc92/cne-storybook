import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'scne-button',
  templateUrl: './scne-buttons.component.html',
  styleUrls: ['./scne-buttons.component.css']
})

export class ScneButtonComponent {
 /**
   * Is this the principal call to action on the page?
   */
 @Input()
 typeButton: 'primary' | 'secondary' = 'primary';

 @Input()
 idButton:number = 1;
 /**
  * How large should the button be?
  */
 @Input()
 size: 'small' | 'medium' | 'large' = 'medium';

 /**
  * Optional click handler
  */
 @Output()
 c_onClick = new EventEmitter<Event>();

//  public get classes(): string[] {
//    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

//    return ['storybook-button', `storybook-button--${this.size}`, mode];
//  }
}
