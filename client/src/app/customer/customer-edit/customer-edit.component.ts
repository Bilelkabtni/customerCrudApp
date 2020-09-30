import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Customer} from "@models/customer.model";
import {CustomerService} from "@customer/services/customer.service";
import {CustomerRoutingService} from "@customer/services/customer-routing.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private customerRoutingService: CustomerRoutingService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { customer: Customer }) => {
      this.customer = data.customer;
    });
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomerById(this.customer._id).subscribe( _ => {
      this.customerRoutingService.navigateToCustomerOverview();
    });
  }

  submit(customer: Customer): void {
    this.customerService.updateCustomer(customer).subscribe( _ => {
      this.customerRoutingService.navigateToCustomerOverview();
    });
  }
}
