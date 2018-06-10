import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'
import { SettingsComponent } from '../settings/settings.component';
import { settings } from 'cluster';
import {PostServiceService} from '../services/post-service.service'

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() public settings : Post;

  post : Post;

  constructor(private postService : PostServiceService) {
    
  }



  sendPost() {
    this.postService.createPost(this.post).subscribe();
  }

  ngOnInit() {
    this.post.author = "helmut_kanone@dickabernett.de"
    this.post.title = "Leon schluckt!"
  }

  

}
