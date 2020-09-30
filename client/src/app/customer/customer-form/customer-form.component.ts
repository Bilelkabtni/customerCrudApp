import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "@models/customer.model";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;
  @Output() submitEv: EventEmitter<Customer> = new EventEmitter<Customer>();

  customerFormGroup: FormGroup = this.formBuilder.group({
    _id: null,
    name: new FormGroup({
      first: new FormControl(""),
      last: new FormControl("")
    }),
    gender: [
      null,
      Validators.required,
    ],
    lastContact: [
      null,
      Validators.required,
    ],
    birthday: [
      null,
      Validators.required,
    ],
    customerLifetimeValue: [
      null,
      Validators.required,
    ]
  });

  get name(): AbstractControl {
    return this.customerFormGroup.get('name');
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const {
      _id = null,
      name = null,
      gender = null,
      birthday = null,
      lastContact = null,
      customerLifetimeValue = null,
    } = this.customer;

    this.customerFormGroup.patchValue({
      _id: _id,
      name: name,
      gender: gender || 'm',
      birthday: birthday,
      lastContact: lastContact,
      customerLifetimeValue: customerLifetimeValue,
    });
  }

  onSubmit(customer: Customer) {
    if (!this.customerFormGroup.valid) {
      return;
    }
    this.submitEv.emit(customer);
  }
}
