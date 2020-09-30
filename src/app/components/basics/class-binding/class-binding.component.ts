import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  myclass = {
    class1:true,
    class2:true,
    class3:true,
  }

  mystyles={
    'padding-left':'57px',
    'padding-top':'10px'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
