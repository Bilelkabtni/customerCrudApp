import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Customer} from "@models/customer.model";
import {CustomerService} from "@customer/services/customer.service";
import {CustomerRoutingService} from "@customer/services/customer-routing.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCreateComponent {
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
              private customerRoutingService: CustomerRoutingService) { }

  createCustomer(customer: Customer) {
    this.customerService.createCustomer(customer).subscribe( _ => {
      this.customerRoutingService.navigateToCustomerOverview();
    });
  }
}
