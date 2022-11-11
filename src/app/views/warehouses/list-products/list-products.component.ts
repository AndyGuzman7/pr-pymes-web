import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  cards = [
    {
      title: 'Doritos',
      units: '15',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Club Social',
      units: '5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Pipocas',
      units: '12',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Nachos Mex',
      units: '25',
      description: 'Description'
    },
  ];
  
  sections = [
    {
      title: 'Section 1',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 2',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 3',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 4',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
  ];

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["register_section"]);
  }

  ngOnInit(): void {
  }

}
