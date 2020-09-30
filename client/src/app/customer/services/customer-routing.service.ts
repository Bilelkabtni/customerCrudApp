import { Injectable } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerRoutingService {

  constructor(private router: Router) {
  }

  public navigate(commands: string[], queryParams?: any): void {
    this.router.navigate(commands, {
      queryParams,
      queryParamHandling: 'merge'
    } as NavigationExtras);
  }


  navigateToEditCustomer(id: string): void {
    this.navigate(['/customer/' + id]);
  }

  navigateToCustomerOverview(): void {
    this.navigate(['/customer']);
  }

  navigateToCreateCustomer(): void {
    this.navigate(['/customer/create']);
  }
}
