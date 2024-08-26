import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {JobOfferComponent} from "./views/job-offer/job-offer.component";
import {LoginComponent} from "./views/login/login.component";
import {NewOfferComponent} from "./views/new-offer/new-offer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'job-offer/:id', component: JobOfferComponent },
  { path: 'new-offer', component: NewOfferComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
