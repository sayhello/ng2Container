import { Component } from '@angular/core';
import { User } from './user';

// Data as objects
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // Data as objects
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('');
  }


  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { first_name: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }

  title = 'app works!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }


  user: User = {
    name: 'Mad Max',
    account: {
      email: '',
      confirm: ''
    }
  };


}
