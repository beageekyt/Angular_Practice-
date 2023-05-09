import { Component } from '@angular/core';

@Component({
  selector: 'inline-style',
  templateUrl: './my-inline-style-component.component.html',
  styles: [
    `.inline-style {
      color: red;
    }`
  ]
})
export class MyInlineStyleComponentComponent {

}
