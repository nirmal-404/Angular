import { Component, OnInit } from '@angular/core'
import { Resource } from '../services/resource'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.scss'
})
export class ResourceApi implements OnInit {
  constructor (private resource: Resource) {}

  apiData: any;
  rxResourceData : any;
  resourceData : any;

  getData () {
    this.resource.getAllData().subscribe(data => {
      this.apiData = data
    })

    // this.rxData = this.resource.rxResourceData;

    // this.resourceData = this.resource.resourceData;
  }

  ngOnInit(): void {
      this.getData();
  }
}
