import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'
import {PostServiceService} from '../services/post-service.service'

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() public settings : Post;

  constructor(private postService : PostServiceService) {
    
  }

  sendPost() {
    this.postService.createPost(this.settings).subscribe();
  }

  ngOnInit() {
  }

  

}
