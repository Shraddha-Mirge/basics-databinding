import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  teamId: number = 10;
  serverStatus: string = 'Not Win IPL';

  getServerStatus() {
    return this.serverStatus;
  }
}

