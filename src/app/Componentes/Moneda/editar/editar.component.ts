import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Moneda } from '../../../Entidad/moneda';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
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
  editar() {
    let id = localStorage.getItem('id');
    this.service.editar(this.coin.numCia,this.coin.claveMoneda,this.coin).subscribe(data => {
      Swal.fire({
        title: '!EVENTO',
        text: 'Editado:'+this.coin.claveMoneda,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.router.navigate(['moneda/listar']);
    },
      error => {
        Swal.fire({
          title: '!EVENTO',
          text: 'ALGO OCURRIO',
          icon: 'error',
          confirmButtonText: 'OK'
        });
       
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
