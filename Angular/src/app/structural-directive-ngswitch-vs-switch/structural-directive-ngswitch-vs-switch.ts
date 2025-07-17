import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngswitch-vs-switch.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.scss'
})
export class StructuralDirectiveNgswitchVsSwitch {
 grade : number = 0;

 set(x:number)  {
  this.grade = x;
 }
}
