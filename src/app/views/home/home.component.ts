import {Component, inject, OnInit} from '@angular/core';
import {JobOfferService} from "../../shared/services/job-offer.service";
import {JobOfferInterface} from "../../shared/models/job-offer.interface";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {AlertsService} from "../../shared/services/alerts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // Inyección de dependencias del servicio de ofertas de trabajo
  private jobOfferService = inject(JobOfferService);
  offerLists: JobOfferInterface[] = []

  // Inyección de dependencias de servicios adicionales
  authService: AuthService = inject(AuthService);
  alertService: AlertsService = inject(AlertsService);

  constructor(private router: Router) { }

  ngOnInit() {
    // Obtener todas las ofertas de trabajo y asignarlas a la lista
    this.jobOfferService.getAllOffers().subscribe(offers => this.offerLists = offers);
  }

  // Método para navegar a los detalles de una oferta específica
  seeOfferDetails(offerId: number) {
    console.log(`/job-offer/${offerId}`)
    this.router.navigate([`/job-offer/${offerId}`]);
  }

  // Getter para verificar si el usuario está logueado
  get userIsLogged(){
    return this.authService.isLoggedIn();
  }

  // Método para eliminar una oferta de trabajo
  deleteOffer(offerId: number){
    this.jobOfferService.deleteOffer(offerId).subscribe(offerDeleted => {
      // Muestra una alerta de la oferta eliminada y actualiza la lista de ofertas
      this.alertService.showDanger(`Offer ${offerDeleted.id} deleted`);
      this.offerLists = this.offerLists.filter(offer => offer.id !== offerDeleted.id);
    })
  }

  // Método para navegar a la página de añadir una nueva oferta
  addNewOffer(){
    this.router.navigate([`/new-offer`]);
  }
}
