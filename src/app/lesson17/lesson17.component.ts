import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lesson17',
  templateUrl: './lesson17.component.html',
  styleUrl: './lesson17.component.scss'
})
export class Lesson17Component {
  // Reactive forms - https://angular.dev/tutorials/learn-angular/17-reactive-forms
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
