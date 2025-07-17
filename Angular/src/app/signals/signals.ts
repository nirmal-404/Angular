import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  // disbled change ddetectioin
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signals {
  normalCounter = 0;
  counter = signal(0);
  // counter :  WritableSignal<number> = signal(0)

  constructor(){
    this.counter.set(5);
    // setTimeout(() => {
    //   this.normalCounter = 50;
    //   this.counter.set(30);
    //   console.log("noraml counter : ",this.normalCounter)
    // }, 5000);
    effect(() => console.log('the value of counter is: ' + this.counter()))
  }

  incrementCounter() {
    this.counter.update(initialValue => initialValue + 1)
  }

  decrementCounter () {
    this.counter.update(initialValue => initialValue -1)
  }
}
