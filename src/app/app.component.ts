import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osos';
  show_days = false;

  fun_days()
  {
    this.show_days = !this.show_days
  }

}
