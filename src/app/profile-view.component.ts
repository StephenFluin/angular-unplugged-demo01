import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {

  title = 'app works!';
  messages: string[] = [];

  addMessage(): void {
    this.messages.push("Hello NG-Pakistan!");
  }

}
