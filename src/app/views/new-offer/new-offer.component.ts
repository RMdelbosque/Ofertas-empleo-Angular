import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobOfferService} from "../../shared/services/job-offer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent {

  // FormGroup que representa nuestro formulario con su estructura y validaciones.
  newOfferForm: FormGroup;
  dataError = false;

  constructor(
    private formBuilder: FormBuilder,
    private jobOfferService: JobOfferService,
    private router: Router
  ) {
    // Inicialización del formulario con las validaciones requeridas.
    this.newOfferForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.maxLength(300)]],
      empresa: ['', [Validators.required, Validators.maxLength(50)]],
      salario: ['', Validators.required],
      ciudad: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]]
    });
  }

  goBack(){
    this.router.navigate(['home']);
  }

  // Método para manejar el envío del formulario.
  submitOffer() {
    this.dataError = false;
    if (this.newOfferForm.valid) {
      // Llamada al servicio si el formulario es válido.
      this.jobOfferService.addOffer(this.newOfferForm.value).subscribe(
        data => {
          // Acciones a realizar cuando la oferta se añade con éxito.
          console.log('Offer successfully added', data);
          this.router.navigate(['home']);
        },
        error => {
          // Manejo de errores si la adición de la oferta falla.
          this.dataError = true;
        }
      );
    } else {
      // Registro en consola si el formulario es inválido.
      console.error('Form is invalid');
    }
  }
}
