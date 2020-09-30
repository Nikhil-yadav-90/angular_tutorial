import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-binding',
  templateUrl: './propert-binding.component.html',
  styleUrls: ['./propert-binding.component.css']
})
export class PropertBindingComponent implements OnInit {

  name:string = "Arun Medicos";
  enable:boolean  = true;




  constructor() { }

  ngOnInit(): void {
  }

}
