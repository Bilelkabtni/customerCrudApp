import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CustomerRoutingService} from "@customer/services/customer-routing.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() hideCreateButton = false;
  @Input() showBackButton = true;

  constructor(private customerRoutingService: CustomerRoutingService) { }

  navigateToCreateQuestionPage(): void {
    this.customerRoutingService.navigateToCreateCustomer();
  }

  navigateToOverview(): void {
    this.customerRoutingService.navigateToCustomerOverview();
  }
}
