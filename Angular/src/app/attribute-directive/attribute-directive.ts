import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.scss'
})
export class AttributeDirective {
  // 1
  textColor: string = "text-success";

  changeColor(x: string) {
    this.textColor = x;
  }

  // 2
  isTextGreen: boolean = false;
  
  // 3
  userClass : string = '';


  //  ------------- style sirective

  // 1
  styleColor: string = 'orange';
  updateColor(ngStyleColor:string) {
    this.styleColor = ngStyleColor;
  }

  // 2
  isTextOrange : boolean = false;

  // 3
  customClass : any = {
    'color' : 'yellow',
    'height' : '150px',
    'width' : '400px',
    'border' : '1px solid black'
  }

}
