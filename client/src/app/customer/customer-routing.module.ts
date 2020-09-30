import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";
import {CustomerResolverService} from "./resolvers/customer.interceptor";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";

const routes: Routes = [{
  path: '',
  data: {
    pageTitle: 'Customer'
  },
  children: [
    {
      path: '',
      component: CustomerOverviewComponent
    },
    {
      path: 'create',
      component: CustomerCreateComponent
    },
    {
      path: ':id',
      component: CustomerEditComponent,
      resolve: {
        customer: CustomerResolverService
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
