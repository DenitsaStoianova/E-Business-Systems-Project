import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Template } from 'src/interfaces/template.interface';

@Component({
 selector: 'app-searchbar',
 templateUrl: './searchbar.component.html'
})
export class SearchbarComponent implements OnInit {

 constructor(private http: HttpClient) { }

    searchTerm: string = "";

    templates: Array<Template> = [];
    
    term: string = "";


// fetchSeries(value: String){
//     if(value === '') {
//       return this.searchResult = []
//     }
//     this.searchResult = this.seriesList.filter(function(series) {
//       return series.name.toLowerCase().startsWith(value.toLowerCase())
//     })
// }
 ngOnInit() {
    this.http.get<Array<Template>>(environment.serveUrl +'/templates')
    .subscribe((data: Array<Template>) => {
      this.templates = data;
    });
 }
}