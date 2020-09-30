import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence',
  templateUrl: './template-refrence.component.html',
  styleUrls: ['./template-refrence.component.css']
})
export class TemplateRefrenceComponent implements OnInit {



  myNameValue(fname,lname){
    console.log(fname.value+" "+lname.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
