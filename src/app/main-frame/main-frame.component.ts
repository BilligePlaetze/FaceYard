import { Component, OnInit, EventEmitter } from '@angular/core';
import { Post } from "./../model/post";
import { MaterializeAction } from 'angular2-materialize';
import { PostServiceService } from './../services/post-service.service';
import { Comment } from "./../model/comment";

import {WinzelHashTags} from "./../model/hashTags";
import {WinzelGraps} from "./../model/winzelGraps";


@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css'],
})

export class MainFrameComponent implements OnInit {

  constructor(private pss : PostServiceService) {
    
  }

  settings : Post;
  posts : Array<Post> = [];
  newComment : string;
  parentTitle : Post;
  liked : boolean[];
  modalActions1 = new EventEmitter<string|MaterializeAction>();
  currentHashTags = new WinzelHashTags();
  winzelGrap = new WinzelGraps();
  winzelGrap2 = new WinzelGraps();
  winzelHashTag = new WinzelHashTags();
  winzelHashTag2 = new WinzelHashTags();
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

  like(p : Post) {
    this.liked[this.posts.indexOf(p)] =!this.liked[this.posts.indexOf(p)];
    if (!this.liked[this.posts.indexOf(p)]){
      p.winzelUpvotes --; 
    } else
    {
      p.winzelUpvotes ++; 
    }
    this.updatePost(p);
  } 

  updatePost(p : Post) {
    this.pss.updatePost(p).subscribe();
  }

  sendComment() {
    let c : Comment = new Comment();
    c.text = this.newComment;
    c.date = new Date().toString();
    this.parentTitle.winzelComments.splice(0,0,c);
    this.updatePost(this.parentTitle);
  }

  ngOnInit(): void {
    this.settings = new Post();
    this.settings.winzelGraps = [];
    this.settings.winzelHashTags =[];
    this.winzelGrap = new WinzelGraps();
    this.winzelGrap2 = new WinzelGraps();
    this.winzelHashTag = new WinzelHashTags();
    this.winzelHashTag2 = new WinzelHashTags();

    this.pss.getPosts().subscribe(x => this.posts = x, 
    err => {
      console.log(err);
    });

    this.liked = new Array<boolean>(this.posts.length);

    this.settings = new Post();
    //this.settings.winzelTitle = "Winzergenossenschaft nutzt Winzel"
    //this.settings.winzelText = "Lange träumte unser Autor von einer Flasche Château Petrus. Nun hat er sie sich gegönnt, Jahrgang 1986 für 2495 Euro – und Freunde zur Probe eingeladen. Würde der Wein schmecken? Es wurde ein denkwürd…";
    this.settings.winzelAuthor = "Helmut.Scharnweber@gmx.de";
    this.winzelGrap.gap = "Riesling";
    this.winzelGrap2.gap = "Dornfelder";
    this.settings.winzelGraps = [this.winzelGrap, this.winzelGrap2];
    this.winzelHashTag.hashTag = "Schädlingsbefall";
    this.winzelHashTag2.hashTag = "Technik";
    this.settings.winzelHashTags = [this.winzelHashTag, this.winzelHashTag2];
    //this.settings.winzelLocation = "regional";
  

    // let post : Post = new Post();
    // let post2 : Post = new Post();
    // post.title = "Test Title which is very very very teribly long because wine people don't write short titles";
    // post.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // post.upvotes = 15;
    // post2.title = "Testing testing";
    // post2.text = "Roses are red, wine is also red. Poems are hard. Wine.";
    // post2.upvotes = 24;
    // this.posts[0] = post;
    // this.posts[1] = post2;
  }
}
