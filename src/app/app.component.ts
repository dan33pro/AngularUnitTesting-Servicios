import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-testing-services';

  ngOnInit(): void {
    const calculator = new Calculator();
    const rta = calculator.multiply(2,4);
    console.log(rta === 8);

    const rta2 = calculator.divide(10,0);
    console.log(rta2 === null);
  }
}
