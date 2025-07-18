import { Component, OnInit } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { User } from '../user'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm implements OnInit {
  userObject: User = {}

  onSubmit (userForm: NgForm) {
    console.log(userForm.value)
  }

  ngOnInit (): void {
    // this.userObject = {
    //   firstName: 'Nirmal',
    //   lastName: 'Perera',
    //   email: 'nirmal@example.com',
    //   password: '123',
    //   isChecked: false
    // }
  }

  // in this method we need to  set al the feilds even we do not need to sset them
  setValues (userForm: NgForm) {
    let obj = {
      firstName: 'Nirmal-setValues',
      lastName: 'Perera-setValues',
      email: 'nirmal@example.com-setValues',
      password: '123-setValues',
      isChecked: true
    }
    userForm.setValue(obj)
  }

  patchValues (userForm: NgForm) {
    let obj = {
      firstName: 'Nirmal-patchValues',
      lastName: 'Perera-patchValues',
      email: 'nirmal@example.com-patchValues',
    }
    userForm.control.patchValue(obj);
  }

  resetValues (userForm: NgForm) {
    // userForm.reset();
    userForm.resetForm();
  }
}
