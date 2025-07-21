import { Component, OnInit } from '@angular/core'
import { Crud } from '../crud'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.scss'
})
export class ViewUser implements OnInit {
  constructor (private crud: Crud, private activeRoute: ActivatedRoute, private router : Router) {}

  userId!: {
    uid: number
  }

  userData: any

  ngOnInit (): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    }

    console.log(this.userId.uid)

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res
    })
  }

  onClose () {
    this.router.navigateByUrl('crud')
  }
}
