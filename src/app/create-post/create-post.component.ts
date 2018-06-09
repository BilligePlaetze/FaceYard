import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post'
import { SettingsComponent } from '../settings/settings.component';
@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  settings : Post;


  ngOnInit() {
this.settings = new Post();
    this.settings.author = "Helmut Scharnweber";
    this.settings.grapes = ["Riesling", "Pinot Noir"];
    this.settings.hashtags = ["Schädlingsbefall","Technik"];
    this.settings.location = "regional";
  }

  

}
