import { Component, Input, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-price-target",
  templateUrl: "./price-target.component.html",
  styleUrls: ["./price-target.component.css"]
})
export class PriceTargetComponent implements OnInit {
  @Input() quote: any;
  @Input() target: any;
  evo = 0;
  showtarget = false;
  showquote = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.quote) {
      this.evo = (this.quote["c"] / this.quote["o"] - 1) * 100;
      this.showquote = true;
    } else {
      this.showquote = false;
      this.evo = 0;
    }

    if (this.target) {
      this.showtarget = true;
    } else {
      this.showtarget = false;
    }
  }
}
