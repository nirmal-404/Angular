import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SharedData {

  API_URL="https://jsonplaceholder.typicode.com/users";

  constructor (private _http : HttpClient) {

  }

  getUserData() {
    return this._http.get(this.API_URL);
  }

  userData = {
    id: 1,
    name: 'Nirmal',
    username: 'nirmal123',
    email: 'nirmal@gmail.com',
    subscription: 'basic'
  }

  isEligibleForSubscription () {
    if (
      this.userData.subscription == 'basic' &&
      this.userData.email.endsWith('@gmail.com')
    ) {
      return true
    } else {
      return false
    }
  }
}
