import { Component, Input, OnInit, SimpleChange } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-trend",
  templateUrl: "./trend.component.html",
  styleUrls: ["./trend.component.css"]
})
export class TrendComponent implements OnInit {
  @Input() trend: any;
  show = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChange) {
    if (this.trend){
    if (Object.keys(this.trend).length > 0) {
      this.show = true;
      const canvas = <HTMLCanvasElement>document.getElementById("chartTrend");
      const ctx = canvas.getContext("2d");

      var rep_trend = this.trend.count;
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "doughnut",
        data: {
          labels: Object.keys(rep_trend),
          datasets: [
            {
              backgroundColor: [
                "rgb(84, 185, 52)",
                "rgb(251, 206, 64)",
                "rgb(248, 96, 93)"
              ],
              data: Object.values(rep_trend)
            }
          ]
        },
        // Configuration options go here
        options: {
          legend: { display: false }
        }
      });
    } else {
      this.show = false;
    }
    }
  }
}
