import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // state 
  newMemberName = "";
  members: string[] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    this.members.push(this.newMemberName);
  }

}
