import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-all-warehouses',
  templateUrl: './all-warehouses.component.html',
  styleUrls: ['./all-warehouses.component.css']
})
export class AllWarehousesComponent implements OnInit {

  cards = [
    {
      title: '1',
      sections: '5',
      shelves: '6',
      size: '22x34',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: '2',
      sections: '5',
      shelves: '6',
      size: '22x34',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: '3',
      sections: '5',
      shelves: '6',
      size: '22x34',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: '4',
      sections: '5',
      shelves: '6',
      size: '22x34',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },

  ];

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["warehouse"])
  }

  ngOnInit(): void {
  }

}
