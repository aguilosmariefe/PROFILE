import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  compose="";
  messages=[];

  constructor() { }

  sendSms(){
    let messages ={
      compose: this.compose
    }
    this.messages.push(messages);
    console.log(this.compose);
    this.clearField();
  }
  clearField(){
    this.compose = "";
  }

  ngOnInit() {
  }

}
