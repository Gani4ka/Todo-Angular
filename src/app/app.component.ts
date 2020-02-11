import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnLabel = 'test text';

  btnHandler (data: number): void {
    console.log(data)
  }
}
