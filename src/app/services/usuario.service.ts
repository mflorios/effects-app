import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Usuario, Page } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "https://reqres.in/api"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Page>(`${this.url}/users?per-page=6`)
              .pipe(
                map(resp => resp.data )
              )
  }
}
