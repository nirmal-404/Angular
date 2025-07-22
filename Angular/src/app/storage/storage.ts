import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.html',
  styleUrl: './storage.scss'
})
export class Storage {

  constructor(private cookie : CookieService) {}

  sessionValue : string = ""

  localValue : string = ""

  cookieValue : string = ""

  // session storage
  setSession() {
    sessionStorage.setItem('name', 'nirmal')
    sessionStorage.setItem('pass', '12345')
  }

  getSession() {
    this.sessionValue = sessionStorage.getItem('name') ?? ""
  }

  removeSession() {
    sessionStorage.removeItem('pass')
  }

  clearSession() {
    sessionStorage.clear()
    this.sessionValue = ""
  }

  // local storage
  setLocal() {
    localStorage.setItem('name', 'nirmal')
    localStorage.setItem('pass', '12345')
  }

  getLocal() {
    this.localValue = localStorage.getItem('name') ?? ""
  }

  removeLocal() {
    localStorage.removeItem('pass')
  }

  clearLocal() {
    localStorage.clear()
    this.localValue = ""
  }

  // cookie
  setCookie() {
    this.cookie.set('token1', '123', 1)
    this.cookie.set('token2', 'abc')
  }

  getCookie() {
    this.cookieValue = this.cookie.get('token1') ?? ""
  }

  deleteCookie() {
    this.cookie.delete('token1')
    this.cookieValue = ""
  }

  deleteAllCookies() {
    this.cookie.deleteAll()
    this.cookieValue = ""
  }

}
