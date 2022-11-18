import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert(this.form)
  }

}
