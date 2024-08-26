import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {AlertsService} from "../services/alerts.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authService: AuthService = inject(AuthService);
  alertService: AlertsService = inject(AlertsService);
  router:Router = inject(Router);

  // Redirecciona al usuario a la página de inicio de sesión
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  // Cierra la sesión del usuario y muestra un mensaje de alert
  logout(){
    localStorage.clear(); // Elimina los datos del usuario para cerrar sesión
    this.alertService.showWarning('User logged out'); // Notificación al usuario
  }

  // Comprueba si el usuario tiene la sesión abierta
  get userIsLogged(){
    return this.authService.isLoggedIn();
  }
}
