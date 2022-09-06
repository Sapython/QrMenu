import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomOptionsRoutingModule } from './room-options-routing.module';
import { RoomOptionsComponent } from './room-options.component';


@NgModule({
  declarations: [
    RoomOptionsComponent
  ],
  imports: [
    CommonModule,
    RoomOptionsRoutingModule
  ]
})
export class RoomOptionsModule { }
