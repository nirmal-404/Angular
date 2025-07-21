import { HttpClient } from '@angular/common/http'
import { Injectable, resource } from '@angular/core'
import { rxResource } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root'
})
export class Resource {
  constructor (private http: HttpClient) {}

  base_url: string = 'https://fake-store-api.mock.beeceptor.com'

  getAllData () {
    return this.http.get(`${this.base_url}/api/users`)
  }

  // rxResourceData = rxResource({
  //   loader : () => this.http.get(`${this.base_url}/api/users`)
  // });

  // resourceData = resource({
  //   loader: () =>
  //     fetch(`${this.base_url}/api/users`).then(
  //       res => res.json() as Promise<any>
  //     )
  // })
}
