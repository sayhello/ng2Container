import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/@telerik/kendo-theme-default/dist/all.css']
})
export class AppComponent {
  title = 'app works!';

  onButtonClick() {
    alert('Hello from Kendo UI!');
  }

private gridData: any[] = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": true
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": false
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10.0000,
        "Discontinued": false
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22.0000,
        "Discontinued": false
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.3500,
        "Discontinued": false
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25.0000,
        "Discontinued": false
    }];

}
