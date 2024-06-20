import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Moneda } from '../../../Entidad/moneda';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{
  constructor(private router: Router, private service: ServidorService) { }
  ngOnInit(): void {
    this.buscar();
    
  }
  moneda!: Moneda[];
  coin: Moneda = new Moneda();
  buscar() {
    let id = localStorage.getItem('id');
    let clave = localStorage.getItem('clave');
    this.coin.numCia = Number(id);
    this.coin.claveMoneda=clave as string;
    console.log(id,clave);
    this.service.buscar(this.coin.numCia,this.coin.claveMoneda).subscribe(data => {
      this.coin = data;
      Swal.fire({
        title: '!EVENTO',
        text: 'CARGADO',
        icon: 'success'
      });
    });
  }
  eliminar() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "!EVENTO",
      text: "ESTAS SEGURO!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "si eliminado!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let id = localStorage.getItem('id');
        this.service.eliminar(this.coin.numCia,this.coin.claveMoneda).subscribe(data => {
          swalWithBootstrapButtons.fire({
            title: '!EVENTO',
            text: "SE ELIMINO " + this.coin.claveMoneda,
            icon: "success"
          });
          this.router.navigate(['moneda/listar']);
        });

      } this.router.navigate(['vet/listarv']); {
        swalWithBootstrapButtons.fire({
          title: '!EVENTO',
          text: "SE ELIMINO " + this.coin.claveMoneda,
          icon: "success"
        });
        this.router.navigate(['moneda/listar']);
      }
    });
  }
cancelar(){
  Swal.fire({
    title: '!EVENTO',
    text: 'CANCELADO',
    icon: 'info',
    confirmButtonText: 'OK'
  });
  this.router.navigate(['moneda/listar']);
}
}
