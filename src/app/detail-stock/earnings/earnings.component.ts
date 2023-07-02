import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-earnings",
  templateUrl: "./earnings.component.html",
  styleUrls: ["./earnings.component.css"]
})
export class EarningsComponent implements OnInit {
  @Input() earnings: any;

  constructor() {}

  ngOnInit() {}
}
