import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ServersComponent } from '../servers/servers.component'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online
      {color: white;
      }
  `]
})
export class ServerComponent {
  [x: string]: any;
  serverID: number = 10;
  serverStatus: string = 'offline';
  @Output() deleteServer = new EventEmitter();
  @Input() remove = false;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'lawngreen' : 'crimson';
  }

  onRemoveServer() {
    this.deleteServer.emit();
  }

}
