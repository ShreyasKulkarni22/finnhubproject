import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  name: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.name = params["name"];
    });
  }
}
