import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  card1 = Array.from({ length: 4 }).fill({});
  card2 = Array.from({ length: 2 }).fill({});
}
