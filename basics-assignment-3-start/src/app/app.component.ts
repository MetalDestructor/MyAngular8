import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  buttonLog = [];
  limit = 4;

  displayDetails() {
    this.showDetails = !this.showDetails;
    this.buttonLog.push(this.getCurrentTimestamp());
  }

  getCurrentTimestamp() {
    let timestamp = new Date();

    let dd = timestamp.getDate();
    let mm = timestamp.getMonth() + 1;
    let yyyy = timestamp.getFullYear();

    let hh = timestamp.getHours();
    let MM = timestamp.getMinutes();
    let ss = timestamp.getSeconds();

    let currentDate = mm + '/' + dd + '/' + yyyy;
    let currentHour = hh + ':' + MM + ':' + ss;

    return currentDate + ' ' + currentHour;
  }

  getBackgroundColor(i: number): string {
    return i < this.limit ? 'white' : 'blue';
  }

  getClass(i: number): boolean {
    return i < this.limit ? false : true;
  }
}
