import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsService } from './effects.service';

import { counterReducer } from './counter';
import { AppComponent } from './app.component';
import { EmitsComponent } from './emits/emits.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([EffectsService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
