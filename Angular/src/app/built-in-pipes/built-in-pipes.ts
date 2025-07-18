import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { of } from 'rxjs'
import { CustomPipe } from '../custom-pipe'
import { CustomDatePipe } from '../custom-date-pipe'

@Component({
  selector: 'app-built-in-pipes',
  imports: [
    CommonModule, 
    CustomPipe,
    CustomDatePipe
  ],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss'
})
export class BuiltInPipes {
  // built in pipes related stuff
  angularPipes: string = 'use pipes to format data in angular templates'

  personData = {
    name: 'Nirmal',
    age: 30,
    city: 'gampaha'
  }

  currentDate: Date = new Date()

  items = of(['Apple', 'Banana', 'Mango'])

  // custom pippes related  stuff
  mobileNumber : any = 123456789;
}
