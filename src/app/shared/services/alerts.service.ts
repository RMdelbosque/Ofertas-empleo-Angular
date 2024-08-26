import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  // Variables booleanas para controlar la visibilidad de las alertas
  showAlertSuccess = false;
  showAlertWarning = false;
  showAlertDanger = false;
  alertMessage = '';

  // Muestra una alerta de éxito y la oculta después de 3 segundos
  showSuccess(message: string){
    this.showAlertSuccess = true;
    this.alertMessage = message;
    setTimeout(() => this.showAlertSuccess = false, 3000);
  }

  // Muestra una alerta de advertencia y la oculta después de 3 segundo
  showWarning(message: string){
    this.showAlertWarning = true;
    this.alertMessage = message;
    setTimeout(() => this.showAlertWarning = false, 3000);
  }

  // Muestra una alerta de peligro y la oculta después de 3 segundos
  showDanger(message: string){
    this.showAlertDanger = true;
    this.alertMessage = message;
    setTimeout(() => this.showAlertDanger = false, 3000);
  }
}
