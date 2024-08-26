import {Component, inject, OnInit} from '@angular/core';
import {JobOfferInterface} from "../../shared/models/job-offer.interface";
import {JobOfferService} from "../../shared/services/job-offer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html'
})
export class JobOfferComponent implements OnInit{

  jobOffer?: JobOfferInterface;
  isLoading = true;
  router:Router = inject(Router);

  constructor(
    private jobOfferService: JobOfferService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Al iniciar, suscríbete a los cambios de los parámetros de la ruta
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convierte el parámetro de ruta 'id' a un número
      this.jobOfferService.getOfferDetail(id).subscribe(
        (offer) => {
          this.jobOffer = offer;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      )
    })
  }

  goBack(){
    this.router.navigate(['home']);
  }
}
