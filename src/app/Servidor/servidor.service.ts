import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moneda } from '../Entidad/moneda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8020/moneda';

  listar(): Observable<Moneda[]> {
    return this.http.get<Moneda[]>(this.url);
  }

  buscar(id: number, clave: string): Observable<Moneda> {
    return this.http.get<Moneda>(`${this.url}/${id}/${clave}`);
  }

  guardar(moneda: Moneda): Observable<string> {
    return this.http.post<string>(this.url, moneda);
  }

  editar(id: number, clave: string, dato: Moneda): Observable<string> {
    return this.http.put<string>(`${this.url}/${id}/${clave}`, dato);
  }

  eliminar(id: number, clave: string): Observable<string> {
    return this.http.delete<string>(`${this.url}/${id}/${clave}`);
  }
}
