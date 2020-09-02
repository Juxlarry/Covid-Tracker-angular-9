import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnChanges {
  @Input() countriesData:any;
  constructor() { }

  ngOnChanges() {
    console.log(this.countriesData); 

    this.countriesData.sort((a:any, b:any) =>{
      return b.TotalConfirmed - a.TotalConfirmed;
    });

    
  }

}
