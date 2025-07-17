import { Component } from '@angular/core';
import { Signals } from '../signals/signals';
import { LinkedSignal } from '../linked-signal/linked-signal';

@Component({
  selector: 'app-signal-layout',
  imports: [
    Signals,
    LinkedSignal
  ],
  templateUrl: './signal-layout.html',
  styleUrl: './signal-layout.scss'
})
export class SignalLayout {

}
