import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrMenuComponent } from './qr-menu.component';

const routes: Routes = [
  {
    path: '',
    component: QrMenuComponent,
    children: [
      {
        path: 'customerDetail',
        loadChildren: () =>
          import('./customer-detail/customer-detail.module').then(
            (m) => m.CustomerDetailModule
          ),
      },
      {
        path: 'start',
        loadChildren: () =>
          import('./start/start.module').then((m) => m.StartModule),
      },
        
        { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
        { path: 'roomOptions', loadChildren: () => import('./room-options/room-options.module').then(m => m.RoomOptionsModule) },
        { path: 'userDetails', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule) },
    ],
  },
  { path: 'placed', loadChildren: () => import('./placed/placed.module').then(m => m.PlacedModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrMenuRoutingModule {}
