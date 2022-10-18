import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(data => {
      this.usuarios = data.users;
      this.loading = data.loading;
      this.error = data.error;
    })
    this.store.dispatch(cargarUsuarios());
    // const us = this.usuarioService.getUsers().subscribe((data) => {
    //   console.log(data);
    //   this.usuarios = data
    // })

  }

}
