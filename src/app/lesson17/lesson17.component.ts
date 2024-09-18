import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson17',
  templateUrl: './lesson17.component.html',
  styleUrl: './lesson17.component.scss'
})
export class Lesson17Component {
  // Reactive forms - https://angular.dev/tutorials/learn-angular/17-reactive-forms
  profileForm = new FormGroup({
    // Validating forms - https://angular.dev/tutorials/learn-angular/18-forms-validation
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email + ' | ' + this.profileForm.value.password);
  }
}
