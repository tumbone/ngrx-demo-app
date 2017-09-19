import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
