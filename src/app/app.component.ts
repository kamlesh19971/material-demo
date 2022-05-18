import { Component } from '@angular/core';
// import { MatRadioModule } from './material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  isChecked = true;

  color = 2

  colors: any[] = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  // onChange($event: MatRadioModule) {
  //   console.log($event);

  // }
} 
