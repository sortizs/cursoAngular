import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  userForm: FormGroup;

  user: any = {
    fullName: {
      name: 'Sebastian',
      lastName: 'Ortiz Serna'
    },
    email: 'sebastian.ortiz@uruit.com',
    hobbies: ['Run'],
    username: '',
    password: '',
    password2: ''
  };

  constructor() {
    // console.log(this.user);
    this.userForm = new FormGroup({
      fullName: new FormGroup({
        name: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
        lastName: new FormControl(
          '',
          Validators.required
        )
      }
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ),
      hobbies: new FormArray(
        [
          new FormControl('', Validators.required)
        ]
      ),
      username: new FormControl(
        '',
        Validators.required,
        this.userExists
      ),
      password: new FormControl(
        '',
        Validators.required
      ),
      password2: new FormControl()
    });
    // this.userForm.setValue(this.user);
    this.userForm.controls['password2'].setValidators(
      [
        Validators.required,
        this.noIgual.bind(this.userForm)
      ]
    )
  }

  addHobbie() {
    (<FormArray>this.userForm.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  userExists(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise(
      (resolve) => {
        setTimeout(() => {
          if (control.value.toLowerCase() === "sortizs") {
            resolve({ exists: true });
          } else {
            resolve(null);
          }
        }, 2000);
      }
    )

    return promise;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    let form: any = this;
    if (control.value !== form.controls['password'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  saveChanges() {
    console.log(this.userForm);

    this.userForm.reset({
      fullName: {
        name: '',
        lastName: ''
      },
      email: ''
    });
  }

}
