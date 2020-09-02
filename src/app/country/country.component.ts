import { Component,Input, OnChanges } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnChanges {

  @Input() mainCountry:any; 
  constructor() { 
    

  }

  ngOnChanges() {
    // console.log (this.mainCountry); 

  }

}
