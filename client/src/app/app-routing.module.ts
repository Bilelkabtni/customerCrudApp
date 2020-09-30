import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
}, {
  path: '',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
},
  {
    path: '**',
    redirectTo: '/customer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
