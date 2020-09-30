import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "@models/customer.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl: string = 'http://localhost:3000/customer/';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + "fetch")
      .pipe(map((cust: Customer[]) => {
        return cust.map(checklist => new Customer(checklist));
      }));
  };

  deleteCustomerById(id: string): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + id)
      .pipe(map(c => new Customer(c)));
  };

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + "create", customer)
      .pipe(map(c => new Customer(c)));
  };

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl + customer._id, customer)
      .pipe(map(c => new Customer(c)));
  };

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + id)
      .pipe(map(c => new Customer(c)));
  };
}
