import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-select-register',
  templateUrl: './select-register.component.html',
  styleUrls: ['./select-register.component.css']
})
export class SelectRegisterComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["select-register"]);
  }

  ngOnInit(): void {
  }

}
