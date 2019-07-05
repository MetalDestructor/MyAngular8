import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h1>SUCCESS</h1>
  <div class="app-message">
  </div>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
