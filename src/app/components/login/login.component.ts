import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  creds: Credenciais = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  constructor() { }

  ngOnInit(): void {

    
  }

  
  validaCampos(): boolean {
    if(this.email.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }
}
