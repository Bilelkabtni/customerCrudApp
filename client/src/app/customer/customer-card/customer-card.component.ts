import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {Router} from "@angular/router";
import {CustomerRoutingService} from "../services/customer-routing.service";

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer = new Customer();

  constructor(private router: Router,
              private customerRoutingService: CustomerRoutingService) { }

  ngOnInit(): void {
  }

  goToEdit(id: string) : void {
    this.customerRoutingService.navigateToEditCustomer(id);
  }
}
