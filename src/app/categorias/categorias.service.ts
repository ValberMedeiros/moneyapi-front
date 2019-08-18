import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor( private http: HttpClient ) { }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriasUrl )
      .toPromise()
      .then( response => response);
  }
}
