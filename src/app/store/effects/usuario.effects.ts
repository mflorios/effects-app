import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuarioActions from '../actions/usuario.actions';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from "rxjs";


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService){}

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      // tap(data => console.log('effect tap', data)),
       mergeMap(
        ({id}) => this.usuarioService.getUserById(id)
          .pipe(
              tap(data => console.log(data)),
            map(users => usuarioActions.cargarUsuarioSuccess({usuario: users.data})),
            catchError(err => of(usuarioActions.cargarUsuarioError({payload: err})) )
          )
      )
    )
  )
}
