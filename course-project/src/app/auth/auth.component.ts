import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth-response-data.model';
import { Router } from '@angular/router';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styles: []
})
export class AuthComponent implements OnInit {
  loginMode = true;
  isLoading = false;
  error: string = null;

  @ViewChild("authForm", { static: false }) authForm: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSwitchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit() {
    if(!this.authForm.valid){
      return;
    }

    let observable = new Observable<AuthResponseData>();

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    this.isLoading = true;
    if (this.loginMode) {
      observable = this.authService.login(email, password);
    } else {
      observable = this.authService.signup(email, password);
    }

    observable.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(["/recipes"]);
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }
}
