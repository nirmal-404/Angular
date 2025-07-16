import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.html',
  styleUrl: './structural-directive-ngif-vs-if.scss'
})
export class StructuralDirectiveNgifVsIf {
  isChecked : boolean = false;
  isSelected : boolean = false;

  isInputShown : boolean = true;

  input1 : string = "";
  input2 : string = "";


  onClick(){
    this.isChecked = !this.isChecked;
    this.isSelected = !this.isSelected;
  }

  showField() {
    this.isInputShown = true
  }
  hideField() {
    this.isInputShown = false;
  }
}
