import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  reactiveForm: FormGroup

  constructor (private fb: FormBuilder) {
    // this.reactiveForm = new FormGroup({
    //   firstname: new FormControl(''),
    //   lastname: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(),
    //   isChecked: new FormControl(true),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     street: new FormControl(),
    //     pincode: new FormControl()
    //   })
    // })
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: ['']
      }),
      skills: this.fb.array([])
    })
    // disabling a propertydd
    this.reactiveForm.controls['isChecked'].disable()
  }

  get skills (): FormArray {
    return this.reactiveForm.get('skills') as FormArray
  }

  newSkill (): FormGroup {
    return this.fb.group({
      skill: ''
    })
  }

  addSkill () {
    this.skills.push(this.newSkill())
  }

  deleteSkill (i: number) {
    this.skills.removeAt(i)
  }

  onSubmit () {
    console.log(this.reactiveForm.value)
  }

  setAllValues () {
    const skills = [{ skill: 'Angular' }, { skill: 'React' }]
    this.skills.clear()

    skills.forEach(s => {
      this.skills.push(
        this.fb.group({
          skill: [s.skill]
        })
      )
    })

    this.reactiveForm.setValue({
      firstname: 'Nirmal',
      lastname: 'Perera',
      email: 'nirmal@example.com',
      password: '123',
      isChecked: true,
      address: {
        city: 'Gampaha',
        street: 'ABC Rd.',
        pincode: '12345'
      },
      skills: skills
    })
  }

  patchValues () {
    this.reactiveForm.patchValue({
      firstname: 'Nirmal',
      address: {
        city: 'Gampaha'
      }
    })

    this.reactiveForm.controls['lastname'].patchValue('Perera')
  }

  resetValues () {
    this.reactiveForm.reset()
    // this.reactiveForm.controls['lastname'].reset();
  }
}
