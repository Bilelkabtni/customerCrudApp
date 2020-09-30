import { Component, OnInit } from '@angular/core';
import {CustomerService} from "@customer/services/customer.service";
import {Customer} from "@models/customer.model";
import {Router} from "@angular/router";
import {CustomerRoutingService} from "@customer/services/customer-routing.service";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
              private customerRoutingService: CustomerRoutingService,
              private router: Router) { }

  getAllCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  gotToCreate(): void {
    this.customerRoutingService.navigateToCreateCustomer();
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }

}
