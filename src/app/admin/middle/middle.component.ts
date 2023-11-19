import { Component } from '@angular/core';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
  card1 = Array.from({ length: 8 }).fill({});
  card2 = Array.from({ length: 4 }).fill({});
}
