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
  errorMessage = "";
  numberOfTeams: number | "" = "";

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
  
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.errorMessage = "";
    this.members.push(this.newMemberName);
    this.newMemberName= "";
  }

  

}
