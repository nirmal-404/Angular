import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.html',
  styleUrl: './sibling1.scss'
})
export class Sibling1 {

  @Output() sibling1Event = new EventEmitter<any>();

  @Input() sibling1Input : string= "";

  sendDataToSibling2(data : any) {
    this.sibling1Event.emit(data);
  }

}
