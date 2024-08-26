import {Component, inject} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {AlertsService} from "../../shared/services/alerts.service";
import {User} from "../../shared/models/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = {username: undefined, password: undefined};
  authService: AuthService = inject(AuthService);
  router:Router = inject(Router);
  loginError = false;
  alertService: AlertsService = inject(AlertsService);

  // Método para gestionar el inicio de sesión del administrador.
  loginAdmin() {
    this.loginError = false;
    this.authService.authenticate(this.user).subscribe({
      next: (token) => {
        // Si la autenticación es exitosa, almacenamos el token y navegamos a la página de inicio.
        localStorage.setItem('token', token.id_token);
        this.alertService.showSuccess('Login successful!');
          this.router.navigate(['home']);
        },
        error: () => {
          // Si hay un error, establecemos el estado de error de login a true para que se muestre el mensaje.
          this.loginError = true;
        }
    })
  }
}
