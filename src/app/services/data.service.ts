import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria, Empresa } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getEmpresa(): Observable<Empresa> {
    return this.http.get<Empresa>('assets/json/mis-datos.json');
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('assets/json/categorias.json');
  }
}
