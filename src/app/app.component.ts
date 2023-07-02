import { Component, OnInit, VERSION } from "@angular/core";
import { FinnhubService } from "./finnhub.service";

@Component({
  selector: "my-app",
  template: "<app-navbar></app-navbar><router-outlet></router-outlet>",
  styles: ["p {font-family: Lato}"]
})
export class AppComponent {}
