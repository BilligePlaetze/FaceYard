import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'
import {WinzelGraps} from '../model/winzelGraps';
import {WinzelHashTags} from '../model/hashTags';


import {PostServiceService} from '../services/post-service.service'

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() public settings : Post;
  currentPost : Post;

  constructor(private postService : PostServiceService) {
    
  }

  sendPost() {
    this.postService.createPost(this.currentPost).subscribe();
  }

  ngOnInit() {
    this.currentPost = new Post();
    this.currentPost.winzelHashTags = [];
    this.currentPost.winzelGraps = [];
    this.currentPost.winzelAuthor = this.settings.winzelAuthor; 
  }

  setLocation(location : string){
    this.currentPost.winzelLocation = location;
  }
  setGraps(graps : WinzelGraps){
    this.currentPost.winzelGraps.push(graps);
  } 
  setHashtag(hashtag : WinzelHashTags){
    this.currentPost.winzelHashTags.push(hashtag);
  }
}
