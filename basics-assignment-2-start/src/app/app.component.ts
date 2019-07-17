import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewUsername = false;
  username: string;

  onUpdateAllowNewUsername(event:Event){
    if((<HTMLInputElement>event.target).value.length){
      this.allowNewUsername = true;
    }
    else{
      this.allowNewUsername = false;
    }
  }
  onResetUsername(){
    this.username = '';
    this.allowNewUsername = false;
  }
}
