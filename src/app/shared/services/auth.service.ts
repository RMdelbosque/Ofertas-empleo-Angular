import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../assets/environments/environment";
import {User} from "../models/user.interface";

// Define la estructura de un objeto token que se espera recibir
export interface Token {
  id_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient); // Inyecta el cliente HTTP para hacer peticiones
  baseUrl: string; // URL base para las llamadas API

  constructor() {
    this.baseUrl = environment.apiBase
  }

  // Método para autenticar al usuario, devuelve un observable del token
  authenticate(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/authenticate`, user);
  }

  // Comprueba si el usuario está logueado revisando si existe el token en el local storage
  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }
}
