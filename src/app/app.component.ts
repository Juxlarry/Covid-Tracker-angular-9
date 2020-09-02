import { Component } from '@angular/core';
import{HttpClient, HttpParams} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalData:any ={};
  countriesData:any = []; 
  mainCountry: any = {}; 
  posts;
  constructor(private http:HttpClient){
  this.http.get("https://api.covid19api.com/summary")
  .subscribe((value:any) =>{
    this.globalData= value.Global; 
    this.countriesData = value.Countries;

    this.countriesData.forEach((countryList) => {
      if(countryList.CountryCode == "GH"){
        this.mainCountry = countryList; 
      }

    });


    });
  }

  title = 'covidapp';
}
