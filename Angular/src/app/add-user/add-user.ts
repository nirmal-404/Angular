import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { Crud } from '../crud'
import { Reusable } from '../reusable/reusable'

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, Reusable],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {

  parentProperty : string = "Add User : Angular 20"
  addUserForm: FormGroup

  constructor (
    private router: Router,
    private fb: FormBuilder,
    private crud: Crud
  ) {
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: ['']
    })
  }

  onSubmit () {
    // console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud')
    })
  }

  onCancel () {
    this.router.navigateByUrl('crud')
  }
}
