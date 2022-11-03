import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {
  type_business = [
    {id: 1, name: 'Pequeña'},
    {id: 2, name: 'Mediana'},
    {id: 3, name: 'Grande'}
  ];

  
  selectedCategories: string[];
  categories: any[] = [];
  categoriesList = [
    'Belleza y moda', 'Comida', 'Educativo', 'Online o digitales', 'Salud y bienestar',
  ];
  


     

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["register_multistep"]);
  }

  ngOnInit() {
    this.categoriesList.forEach((c, i) => {
        this.categories.push({ id: i, name: c });
    });
  }

}
