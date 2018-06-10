import { Component, OnInit, Input } from '@angular/core';
import { Post } from "./../model/post";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  @Input() childTitle: Post;
  ngOnInit() {
  }

}
