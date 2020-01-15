import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { UserService } from "./user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private activatedSub: Subscription = new Subscription();
  userActivated = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      isActive => (this.userActivated = isActive)
    );
    const myObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) observer.complete();
        if (count > 3) observer.error(new Error("Error is thrown!"));
        count++;
      }, 1000);
    });

    this.subscription = myObservable
      .pipe(
        filter(data => data > 0),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        data => console.log(data),
        error => console.log(error.message),
        () => console.log("Get out of here!")
      );
    // this.subscription = interval(1000).subscribe(count =>{
    //   console.log(count);
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.activatedSub.unsubscribe();
  }
}
