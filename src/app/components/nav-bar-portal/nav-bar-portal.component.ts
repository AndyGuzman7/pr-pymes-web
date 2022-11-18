import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-portal',
  templateUrl: './nav-bar-portal.component.html',
  styleUrls: ['./nav-bar-portal.component.css']
})
export class NavBarPortalComponent implements OnInit {

  public totalItem : number = 0;
  public emailSession : any = sessionStorage.getItem('email');
  public nameSession : any = sessionStorage.getItem('name');
  public logintext: string = 'Iniciar Sesión';
  public searchTerm !: string;
  
  constructor(private cartService : CartService, private router : Router, private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["nav"]);
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      console.log(res.length);
      this.emailSession =sessionStorage.getItem('email');
      this.nameSession = sessionStorage.getItem('name');
      if(this.emailSession==''||this.emailSession==null){
        this.logintext = 'Iniciar Sesión';
      }else{
        this.logintext = 'Cerrar Sesión';
      }
      
    })
  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  loginNavi(){
    if(this.logintext == 'Iniciar Sesión'){
      this.router.navigate(['loginportal']);
    }else{
      this.logintext = 'Iniciar Sesión'
      this.router.navigate(['products']);
      this.cartService.logOutSession();
    }
    
  }
  
  registerNavi(){
    this.router.navigate(['signup']);
  }

  goProducts(){
    this.router.navigate(['products']);
  }

}
