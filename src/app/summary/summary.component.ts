import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnChanges {
  
  @Input() globalData:any; 
  data: any = ""; 

  constructor() {
  
   }

  ngOnChanges() {
    if (Object.keys(this.globalData).length !=0) {
      console.log(this.globalData);
    }
     
     
  }

}
