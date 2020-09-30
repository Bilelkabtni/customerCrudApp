import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Customer} from "@models/customer.model";
import {CustomerService} from "@customer/services/customer.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerResolverService implements Resolve<Customer> {
  constructor(private customerService: CustomerService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    if (route.paramMap.has('id')) {
      const id: string = route.paramMap.get('id');

      return this.customerService.getCustomerById(id).pipe(
        take(1),
        map(d => {
          if (d) {
            return d;
          } else { // id not found
            this.router.navigate(['/customer']);
            return null;
          }
        })
      );
    } else {
      return of(new Customer());
    }

  }
}
