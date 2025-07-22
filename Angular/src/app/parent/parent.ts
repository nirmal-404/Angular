import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { Child } from '../child/child'
import { Sibling1 } from '../sibling1/sibling1'
import { Sibling2 } from '../sibling2/sibling2'
import { Reusable } from '../reusable/reusable'

@Component({
  selector: 'app-parent',
  imports: [Child, Sibling1, Sibling2, Reusable],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent implements AfterViewInit {
  parentProperty: string = 'Hello child - from parent'

  receiveGreetMsg: string = ''

  sbl1Data: any // received data from sibling 1
  sbl2Data: any // received data from sibling 2

  @ViewChild('reusable') reusableComponent!: Reusable

  ngAfterViewInit (): void {
    setTimeout(() => {
      this.reusableComponent.childProperty = 'Greeting from parent component'
    })
  }

  receiveGreet (data: any) {
    this.receiveGreetMsg = data
  }

  receiveFromSBL1 (data: any) {
    this.sbl1Data = data
    console.log(this.sbl1Data)
  }
  receiveFromSBL2 (data: any) {
    this.sbl2Data = data
    console.log(this.sbl2Data)
  }
}
