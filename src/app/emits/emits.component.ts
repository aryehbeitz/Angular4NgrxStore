import { Injectable, Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from '../counter';

@Component({
  selector: 'app-emits',
  templateUrl: './emits.component.html',
  styleUrls: ['./emits.component.css']
})

@Injectable()
export class EmitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @Effect()
  // createUser(): Observable<Action> {
  //   return this.stateUpdates_
  //       .whenAction(AuthActions.CREATE_USER_SUCCESS)
  //       .map((update) => update.action.payload)
  //       .switchMap((payload) => {

  //           return Observable.of(this.routerActions_.navigate("/on-board"));
  //       });
  // }

}
