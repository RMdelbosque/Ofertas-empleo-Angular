import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { LoginComponent } from './login/login.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    HomeComponent,
    JobOfferComponent,
    LoginComponent,
    NewOfferComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    JobOfferComponent,
    LoginComponent,
    NewOfferComponent
  ]
})
export class ViewsModule { }
