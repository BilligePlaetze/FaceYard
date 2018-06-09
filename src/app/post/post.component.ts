import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  modalActions1 = new EventEmitter<string|MaterializeAction>();
  
  model1Params = [
    {
      dismissible: false,
      complete: function() { console.log('Closed'); }
    }
  ]
  openModal1() {
    this.modalActions1.emit({action:"modal",params:['open']});
  }
  closeModal1() {
    this.modalActions1.emit({action:"modal",params:['close']});
  }
  ngOnInit() {
  }

}
