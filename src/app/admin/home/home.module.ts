import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MiddleComponent } from '../middle/middle.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MobileComponent } from '../mobile/mobile.component';
// import {MdInputModule} from '@angular/material'




@NgModule({
  declarations: [SidebarComponent,MiddleComponent,RightPanelComponent,HomeComponent,MobileComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
   
  ]
})
export class HomeModule { 

}
