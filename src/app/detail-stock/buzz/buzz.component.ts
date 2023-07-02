import { Component, Input, OnInit, SimpleChange } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-buzz",
  templateUrl: "./buzz.component.html",
  styleUrls: ["./buzz.component.css"]
})
export class BuzzComponent implements OnInit {
  @Input() buzz: any;
  show = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChange) {
    if (this.buzz){
      if (Object.keys(this.buzz).length > 0) {
        this.show = true;
        const canvas = <HTMLCanvasElement>document.getElementById("chartBuzz");
        const ctx = canvas.getContext("2d");

        if (this.show) {
          var sentiment = this.buzz.sentiment;

          var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: "doughnut",
            data: {
              labels: Object.keys(sentiment),
              datasets: [
                {
                  backgroundColor: ["rgb(248, 96, 93)", "rgb(84, 185, 52)"],
                  data: Object.values(sentiment)
                }
              ]
            },
            // Configuration options go here
            options: { legend: { display: false } }
          });
        }
      } else {
        this.show = false;
      }
  }
  }
}
