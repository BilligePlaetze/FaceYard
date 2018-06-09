import { Component } from '@angular/core';
import { Post } from "./../model/post";

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})

export class MainFrameComponent {
posts : Post[];

}
