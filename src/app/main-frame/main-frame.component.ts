import { Component, OnInit } from '@angular/core';
import { Post } from "./../model/post";
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})

export class MainFrameComponent implements OnInit {

settings : Post;
ngOnInit(): void {
  
  this.settings = new Post();
  this.settings.author = "Helmut Scharnweber";
  this.settings.grapes = ["Riesling", "Pinot Noir"];
  this.settings.hashtags = ["Schädlingsbefall","Technik"];
  this.settings.location = "regional";
}

}
