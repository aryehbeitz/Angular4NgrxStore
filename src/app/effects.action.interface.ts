import { Action } from '@ngrx/store';

export interface ActionEffects extends Action {
  type: string;
  payload?: any;
}