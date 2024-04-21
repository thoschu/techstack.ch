import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, of, switchMap, tap } from 'rxjs';

import { loadIpAction, setIpAction, setTechnologyAction } from './main.actions';
import { AppState } from '../../app.store';

@Injectable()
export class MainEffects {
  private readonly setTechnologyDisabledEffect$ = createEffect(() => this.actions$.pipe(
    ofType(setTechnologyAction),
    tap((action: Record<'disabled', boolean>): void => {
      // console.log(action);
    })
  ), { dispatch: false });

  private readonly setImprintIpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadIpAction),
      switchMap(() => this.httpClient.get('https://checkip.amazonaws.com/', { responseType: 'text' }).pipe(
        switchMap((data: string) => this.httpClient.get<Record<string, string>>(`https://ipapi.co/${data}/json/`)),
        map((ip: Record<string, string>) => setIpAction({ ip }))
      ))
    );
  }, { dispatch: true });

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly httpClient: HttpClient,
  ) {
    actions$.subscribe((action: Action) => {
      // console.log('MainEffects', action);
      // console.log(action.type);
      // this.httpClient.get('http://localhost:3000/api').subscribe((data: any) => {});
    });
  }
}
