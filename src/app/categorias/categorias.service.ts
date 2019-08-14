import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor( private http: HttpClient ) { }

  listarTodas(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjU4OTkwOTYsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI0MjFjYzhmMC0zNzNiLTRhNzItYmI1YS1iZjYyYTZkMzdlOTYiLCJjbGllbnRfaWQiOiJhbmd1bGFyIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.JipKGHtv92dlWhFpIP0X8-kKdwuVbkAgoSR-fFzumBA');

    return this.http.get(this.categoriasUrl, { headers })
      .toPromise()
      .then( response => response);
  }
}
