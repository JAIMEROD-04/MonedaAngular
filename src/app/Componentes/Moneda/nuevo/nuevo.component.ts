import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Moneda } from '../../../Entidad/moneda';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
  constructor(private router: Router, private service: ServidorService) {}

  moneda!: Moneda[];
  coin: Moneda = new Moneda();

  limitarLongitudNumCia() {
    if (this.coin.numCia.toString().length > 4) {
      this.coin.numCia = Number(this.coin.numCia.toString().slice(0, 4));
    }
  }

  guardar() {
    if (this.coin.numCia > 9999) {
      Swal.fire({
        title: 'Error',
        text: 'El número cia (numCia) no puede exceder 9999.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return; // Detener la ejecución si numCia es mayor que 9999
    }

    this.service.guardar(this.coin).subscribe(data => {
      Swal.fire({
        title: '¡Evento!',
        text: 'Guardado: ' + this.coin.claveMoneda,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.router.navigate(['moneda/listar']);
    },
    error => {
      Swal.fire({
        title: '¡Evento!',
        text: 'Algo salió mal al guardar.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  cancelar() {
    Swal.fire({
      title: 'Cancelado',
      icon: 'info',
      confirmButtonText: 'OK'
    });
    this.router.navigate(['moneda/listar']);
  }
}
