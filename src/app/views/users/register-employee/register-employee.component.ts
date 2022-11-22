import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  roles = [
    {id: 1, name: 'Ventas'},
    {id: 2, name: 'Compras'},
    {id: 3, name: 'Almacenes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
