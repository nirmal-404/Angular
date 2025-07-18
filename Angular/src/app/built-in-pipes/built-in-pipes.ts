import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [
    CommonModule
  ],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss'
})
export class BuiltInPipes {
  angularPipes : string = "use pipes to format data in angular templates";

  personData = {
    name : 'Nirmal', 
    age : 30,
    city : "gampaha"
  }

  currentDate : Date = new Date();

  items = of(['Apple', 'Banana', 'Mango'])
}
