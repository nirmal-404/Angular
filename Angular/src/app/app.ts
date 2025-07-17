import { Component, signal } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { User } from './user/user'
import { DataBinding } from './data-binding/data-binding'
import { Directives } from './directives/directives'
import { StructuralDirectiveNgifVsIf } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if'
import { StructuralDirectiveNgforVsFor } from './structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for'
import { StructuralDirectiveNgswitchVsSwitch } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch'
import { AttributeDirective } from './attribute-directive/attribute-directive'
import { Signals } from './signals/signals'
import { LinkedSignal } from './linked-signal/linked-signal'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // LinkedSignal,
    // Signals,
    // AttributeDirective,
    // StructuralDirectiveNgswitchVsSwitch,
    // StructuralDirectiveNgforVsFor,
    // StructuralDirectiveNgifVsIf,
    // Directives,
    // DataBinding,
    // User,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular')
}
