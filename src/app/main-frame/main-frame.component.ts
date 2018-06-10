import { Component, OnInit, EventEmitter } from '@angular/core';
import { Post } from "./../model/post";
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css'],
})

export class MainFrameComponent implements OnInit {

  settings : Post;
  posts : Array<Post> = [];
  parentTitle : Post;
  modalActions1 = new EventEmitter<string|MaterializeAction>();
  
  model1Params = [
    {
      dismissible: false,
      complete: function() { console.log('Closed'); }
    }
  ]
  openModal1(p : Post) {
    this.parentTitle = p;
    this.modalActions1.emit({action:"modal",params:['open']});
  }
  closeModal1() {
    this.modalActions1.emit({action:"modal",params:['close']});
  }

  ngOnInit(): void {
    this.settings = new Post();
    this.settings.author = "Helmut Scharnweber";
    this.settings.grapes = ["Riesling", "Pinot Noir"];
    this.settings.hashtags = ["Schädlingsbefall","Technik"];
    this.settings.location = "regional";

    let post : Post = new Post();
    let post2 : Post = new Post();
    post.title = "Test Title which is very very very teribly long because wine people don't write short titles";
    post.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    post.upvotes = 15;
    post2.title = "Testing testing";
    post2.text = "Roses are red, wine is also red. Poems are hard. Wine.";
    post2.upvotes = 24;
    this.posts[0] = post;
    this.posts[1] = post2;
  }
}
