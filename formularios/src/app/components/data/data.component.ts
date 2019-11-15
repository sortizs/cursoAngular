import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  user: object = {
    fullName: {
      name: '',
      lastName: ''
    },
    email: ''
  };

  constructor() {
    console.log(this.user);
    this.form = new FormGroup({
      fullName: new FormGroup({
        name: new FormControl(
          '',
          [Validators.required,
            Validators.minLength(3)
          ]
        ),
        lastName: new FormControl('', Validators.required)}
      ),
      email: new FormControl(
        '',
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ])
    });

  }

  saveChanges() {
    console.log(this.form.value);
    console.log(this.form);
  }

}
