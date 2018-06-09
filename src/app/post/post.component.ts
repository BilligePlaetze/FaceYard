import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  actions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.actions.emit({action:"modal1",params:['open']});
  }
  closeModal() {
    this.actions.emit({action:"modal1",params:['close']});
  }
  ngOnInit() {
  }

}
