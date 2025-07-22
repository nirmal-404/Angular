import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child {

  @Input() childInputProperty : string = "";
  @Output() childOutputProperty  = new EventEmitter<any>()

  sayHiToParent() {
    this.childOutputProperty.emit("'Hi' - from child"); 
  }
}
