import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string | any = '';
  confirmPassword: string | any = '';
  SignIn: boolean = false;

  @Output() closeSignInEvent = new EventEmitter<boolean>();


  submitRegister() {
    if (this.name === '' && this.username === '' && this.email === '' && this.password === '' && this.confirmPassword === '') {
      alert('Please fill out all fields');
    } else if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('You are registered');
    }
  }

  closeSignIn() {
    this.closeSignInEvent.emit(this.SignIn);
  }
}
