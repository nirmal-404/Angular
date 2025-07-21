import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedData } from '../shared-data'

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {
  dummyData: any;
  isEligible : boolean;

  constructor (private _sharedData: SharedData) {
    this.dummyData = this._sharedData.userData;
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  name: string = 'Nirmal Perera'
  topic: string = 'Data Binding'
  image: string =
    'https://avatars.githubusercontent.com/u/143857543?v=4&size=64'
  random = ''

  onSave () {
    alert('Data Saved Successfully !')
  }

  onChange () {
    alert('Country has chagned !')
  }
}
