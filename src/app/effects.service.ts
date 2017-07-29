import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ActionEffects } from './effects.action.interface';

import { INCREMENT, DECREMENT, RESET } from './counter';

@Injectable()
export class EffectsService {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<ActionEffects> = this.actions$.ofType('INCREMENT')
    // Map the payload into JSON to use as the request body
    .map(toPayload)
    .mergeMap(payload => {
      console.log('payload in effect');
      console.log(payload);
      return Observable.create()//this.http.post('/auth', payload)
        // If successful, dispatch success action with result
        .map(data => ({ type: 'LOGIN_SUCCESS', payload: data }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: 'LOGIN_FAILED' }))
      }
    );

  constructor(
    // private http: Http,
    private actions$: Actions
  ) {}      
}