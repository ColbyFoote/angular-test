import { Component, OnInit, Input } from '@angular/core';
import { ServerComponent } from '../server/server.component'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  @Input() servers = [];
  any = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.any = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDeleteServer() {
    this.servers.pop();
    this.any = this.servers.length === 0 ? false : true;
    this.serverCreated = this.servers.length === 0 ? false : true;
  }

  anyServers() {
    this.any = this.servers.length === 0 ? false : true;
  }

  removeServer() {
    this.onDeleteServer();
  }
}
