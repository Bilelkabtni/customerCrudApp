import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "@components/header/header.component";

@NgModule({
  declarations: [
    CustomerOverviewComponent,
    CustomerFormComponent,
    CustomerCardComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
