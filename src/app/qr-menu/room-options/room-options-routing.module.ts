import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomOptionsComponent } from './room-options.component';

const routes: Routes = [{ path: '', component: RoomOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomOptionsRoutingModule { }
