import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.html',
  styleUrl: './sibling2.scss'
})
export class Sibling2 {

  @Output() sibling2Event = new EventEmitter<any>();

  @Input() sibling2Input : string= "";

  sendDataToSibling1(data : any) {
    this.sibling2Event.emit(data);
  }
}
