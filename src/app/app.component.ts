import { Component } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs//Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ngrx-demo app';
  post: Observable<Post>
  text: string; ///form input val
  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }
}
