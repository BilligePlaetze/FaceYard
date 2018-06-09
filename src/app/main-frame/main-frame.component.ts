import { Component, OnInit } from '@angular/core';
import { Post } from "./../model/post";

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})

export class MainFrameComponent implements OnInit {

posts : Post[];

ngOnInit(): void {
  let post : Post; 
  post.title = "Test Title";
  post.text = "lorem ipsum dolor amet";
  this.posts[0] = post;
  this.posts[1] = post;
  this.posts[2] = post;
}

}
