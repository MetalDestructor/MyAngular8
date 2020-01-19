import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  statuses = ["Stable", "Critical", "Finished"];
  forbiddenNames = ["Test"];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      "project-name": new FormControl(null, [Validators.required/*this.forbiddenProjectNames.bind(this)*/], this.forbiddenProjectNamesAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenProjectNamesAsync(control: FormControl): Promise<any|Observable<any>> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.forbiddenNames.indexOf(control.value) !== -1){
          resolve({nameIsForbidden: true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
