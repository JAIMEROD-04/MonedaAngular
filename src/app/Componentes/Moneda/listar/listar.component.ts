import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../../Servidor/servidor.service';
import { Moneda } from '../../../Entidad/moneda';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  constructor(private router: Router, private service: ServidorService) { }
  ngOnInit(): void {
  this.listar();
  }
  moneda!: Moneda[];
  coin: Moneda = new Moneda();
  listar() {
    this.service.listar().subscribe(data => {
      this.moneda = data;
    });
    
  }
  eliminar(mon: Moneda) {
    localStorage.setItem('id', mon.numCia.toString());
    localStorage.setItem('clave', mon.claveMoneda);
    
    this.router.navigate(['moneda/eliminar']);
  }
  editar(mon: Moneda) {
    localStorage.setItem('id', mon.numCia.toString());
    localStorage.setItem('clave', mon.claveMoneda);
    this.router.navigate(['moneda/editar']);
  }
}
