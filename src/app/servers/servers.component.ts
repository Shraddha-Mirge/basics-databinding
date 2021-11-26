import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Team selected!';
  TeamName = 'Mumbai';
  TeamName1 = 'CSK';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus =  this.TeamName + 'Team won The IPL Match 5 times';
  }

  onUpdateServerName(event: Event) {
    this.TeamName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit1() {
  }

  onCreateServer1() {
    this.serverCreationStatus =  this.TeamName1 + 'Team won The IPL Match 2 times';
  }

  onUpdateServerName1(event: Event) {
    this.TeamName1 = (<HTMLInputElement>event.target).value;
  }
}
