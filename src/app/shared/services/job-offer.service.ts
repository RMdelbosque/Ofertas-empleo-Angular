import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JobOfferInterface} from "../models/job-offer.interface";
import {Observable} from "rxjs";
import {environment} from "../../../assets/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  http = inject(HttpClient); // Inyecta el cliente HTTP para hacer peticiones
  baseUrl: string; // URL base para las llamadas API

  constructor() {
    this.baseUrl = environment.apiBase
  }

  // Obtiene todas las ofertas de trabajo disponibles
  getAllOffers(): Observable<JobOfferInterface[]>{
    return this.http.get<JobOfferInterface[]>(`${this.baseUrl}/ofertas`);
  }

  // Obtiene el detalle de una oferta de trabajo específica por su ID
  getOfferDetail(offerId: number): Observable<JobOfferInterface>{
    return this.http.get<JobOfferInterface>(`${this.baseUrl}/ofertas/${offerId}`);
  }

  // Elimina una oferta de trabajo específica por su ID
  deleteOffer(offerId: number): Observable<JobOfferInterface>{
    return this.http.delete<JobOfferInterface>(`${this.baseUrl}/ofertas/${offerId}`,
      {headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')!}`})})
  }

  // Añade una nueva oferta de trabajo
  addOffer(offer: JobOfferInterface): Observable<JobOfferInterface>{
    return this.http.post<JobOfferInterface>(`${this.baseUrl}/ofertas`, offer, {
      headers: new HttpHeaders(({
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      }))
    });
  }
}
