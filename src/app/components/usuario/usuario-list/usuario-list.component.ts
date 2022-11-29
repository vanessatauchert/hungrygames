import { Component, OnInit } from '@angular/core';

interface Country {
	name: string;
	email: string;
	phone: string;
}

const COUNTRIES: Country[] = [
	{
		name: 'Vanessa',
		email: 'teste@teste',
		phone: '146989754',
	},

];
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit{

  countries = COUNTRIES;

  ngOnInit(): void {
    
  }

}
