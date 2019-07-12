import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Hah, no Server';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
}
