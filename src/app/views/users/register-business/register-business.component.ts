import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/app/load-scripts.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaEmpresa } from 'src/app/models/categoria-empresa';
import { Empresa } from 'src/app/models/empresa';
import { Usuario } from 'src/app/models/usuario';
import { CategoriaEmpresaService } from 'src/app/services/categoria-empresa.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators }from '@angular/forms';

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

  selectedCategories: Categoria[];
  categoriesList: Categoria[];
  categoryBusiness: CategoriaEmpresa[] = [];
  
  usuario: Usuario = new Usuario;
  empresa: Empresa = new Empresa;

  signup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    name: new FormControl('', [Validators.required ]),
    last_name: new FormControl('', [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signup.get('Correo'); }
  get passwordInput() { return this.signup.get('contrasenia'); }  
  get confirmPasswordInput() { return this.signup.get('conf-contrasenia'); }
  get nameInput() { return this.signup.get('Nombre'); }
  get last_nameInput() { return this.signup.get('Apellido'); }  

  constructor(private _LoadScripts:LoadScriptsService, private router: Router, private categoriesService: CategoriaService, private categoryBusinessService: CategoriaEmpresaService, private businessService: EmpresaService, private usuarioService: UsuarioService) {     
    _LoadScripts.Load(["register_multistep"]);
    this.categoriesService.selectCategory().subscribe(categorias => {this.categoriesList = categorias});        
  }

  enviar(): void {
    this.usuario.rol_id = 2;

    this.usuarioService.createUser(this.usuario).subscribe(usuario => {
      console.log(usuario);
    });
    this.businessService.createBusiness(this.empresa).subscribe(empresa => {
      console.log(empresa);
    });

    var nextBusinessId: number;
    this.businessService.getNextId().subscribe(nextId => {
      nextBusinessId = nextId
    }); 
    
    if (this.selectedCategories.length > 0) {            
      for (let index = 0; index < this.selectedCategories.length; index++) {      
        var ce: CategoriaEmpresa = {
          business_id: nextBusinessId,
          category_id: this.selectedCategories[index].id          
        };      
        this.categoryBusiness.push(ce);
      }
    }    

    if (this.categoryBusiness.length > 0) {
      this.categoryBusinessService.createCategoryBusiness(this.categoryBusiness).subscribe(categoryBusiness => {
        console.log(categoryBusiness);
      })
    }    

    this.router.navigate(['user_login']);
  }

  ngOnInit() {
  }

}
