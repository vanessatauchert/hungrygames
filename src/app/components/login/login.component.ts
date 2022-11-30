import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/service/auth.service';


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

  constructor(
    private toast: ToastrService,
    private service: AuthService
    ) { }

  ngOnInit(): void { 
  }

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.toast.info()
    }, () => {
      this.toast.error('Usuário ou senha inválidos');
    })
  }

  
  validaCampos(): boolean {
    return this.email.valid && this.password.valid
  }
}
