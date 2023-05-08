import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cne-buttons',
  templateUrl: './cne-buttons.component.html',

  styleUrls: ['./cne-buttons.component.css']
})

export class CneButtonsComponent {
 /**
   * Is this the principal call to action on the page?
   */
 @Input()
 primary = false;

 /**
  * What background color to use
  */
 @Input()
 backgroundColor?: string;

 /**
  * How large should the button be?
  */
 @Input()
 size: 'prueba' | 'medium' | 'large' = 'medium';

@Input()
clase='nose';

 /**
  * Button contents
  *
  * @required
  */
 @Input()
 label = 'Button';

 /**
  * Optional click handler
  */
 @Output()
 onClick = new EventEmitter<Event>();

 public get classes(): string[] {
   const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

   return ['storybook-button', `storybook-button--${this.size}`, mode];
 }
}
