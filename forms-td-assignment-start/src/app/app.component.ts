import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('f', {static: false}) form: NgForm;
  defaultSubscription = 'advanced';
  subscription = {
    email: '',
    subscriptionType: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.subscription.email = this.form.value.subscriptionData.email;
    this.subscription.subscriptionType = this.form.value.subscriptionData.subscription;
    this.subscription.password = this.form.value.subscriptionData.password;

    console.log(this.subscription);
  }
}
