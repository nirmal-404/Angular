import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.html',
  styleUrl: './reusable.scss'
})
export class Reusable {
  
  @Input() childProperty : string = "Welocme to Angular 20"
}
