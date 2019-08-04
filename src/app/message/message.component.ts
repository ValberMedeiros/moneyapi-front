import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-messages ui-messages-error">
      {{ text }}
    </div>
  `,
})
export class MessageComponent {

  // tslint:disable-next-line:ban-types
  @Input() error: string;
  @Input() control: FormControl;
  // tslint:disable-next-line:ban-types
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
