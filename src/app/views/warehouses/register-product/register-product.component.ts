import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["register_section"]);
  }
  ngOnInit(): void {
  }

}
