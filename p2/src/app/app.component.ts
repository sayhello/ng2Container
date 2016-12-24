import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/@telerik/kendo-theme-default/dist/all.css']
})



export class AppComponent {

  data: Object;
  gridData: any[];
  seriesData: any[];

  constructor(private http: Http) {

    http.get('../assets/stocks.json')
      .map((res: Response) => res.json())
      //.subscribe(res => this.data = res.countries);
      .subscribe(res => this.gridData = res.countries);

    

  }


  title = 'app works!';

  onButtonClick() {
    console.log(this.gridData);
    //alert('Hello from Kendo UI!');
    this.seriesData = [{
        code: "Chai",
        name: 200
    }, {
        code: "Others",
        name: 250
    }];
  }


  

}
