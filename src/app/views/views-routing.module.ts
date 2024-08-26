import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {JobOfferComponent} from "./job-offer/job-offer.component";
import {LoginComponent} from "./login/login.component";
import {NewOfferComponent} from "./new-offer/new-offer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'job-offer/:id', component: JobOfferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-offer', component: NewOfferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
