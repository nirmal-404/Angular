import { Component } from '@angular/core';
import { StructuralDirectiveNgifVsIf } from '../structural-directive-ngif-vs-if/structural-directive-ngif-vs-if';
import { StructuralDirectiveNgforVsFor } from '../structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for';
import { StructuralDirectiveNgswitchVsSwitch } from '../structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch';

@Component({
  selector: 'app-structural-directives',
  imports: [
    StructuralDirectiveNgswitchVsSwitch,
    StructuralDirectiveNgifVsIf,
    StructuralDirectiveNgforVsFor,
  ],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.scss'
})
export class StructuralDirectives {

}
