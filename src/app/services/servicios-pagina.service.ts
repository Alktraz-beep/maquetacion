import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Categorias } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosPaginaService {
  private apiUrl:string="https://api.viveplus.com.mx/v1/?m=lista_categorias&key=wB812Mct7RkmRVEriZ63OA==";//api url
  
  constructor(private http:HttpClient) { }

  getLista():Observable<Categorias>{
    const url=`${this.apiUrl}` ;
    return this.http.get<Categorias>(url);
  }
}
