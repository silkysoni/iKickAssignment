import { Component } from '@angular/core';
import {YourData} from './homes.module';
import { MatTableDataSource } from '@angular/material/table';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template:`
  <app-sidebar></app-sidebar>
  <app-middle></app-middle>
  <app-right-panel></app-right-panel>
  `
})
export class HomeComponent {
  displayedColumns: string[] = ['column1', 'column2', 'column3'];
  dataSource = new MatTableDataSource<YourData>([
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    // Add more rows as needed
  ]);

  // showTable: boolean = true;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.checkScreenWidth();
  // }

  // private checkScreenWidth(): void {
  //   // Adjust the breakpoint based on your needs
  //   this.showTable = window.innerWidth > 390;
  // }

}
