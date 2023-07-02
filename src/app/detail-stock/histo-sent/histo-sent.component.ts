import { Component, Input, OnInit, SimpleChange } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-histo-sent",
  templateUrl: "./histo-sent.component.html",
  styleUrls: ["./histo-sent.component.css"]
})
export class HistoSentComponent implements OnInit {
  @Input() histo: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChange) {
    console.log("Something changed");

    const canvas = <HTMLCanvasElement>document.getElementById("chartHisto");
    if (this.histo && canvas) {
      const ctx = canvas.getContext("2d");
      var stackedBar = new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.histo.map(x => x.period),
          datasets: [
            {
              label: "Strong Sell",
              backgroundColor: "rgb(212, 32, 29)",
              data: this.histo.map(x => x.strongSell)
            },
            {
              label: "Sell",
              backgroundColor: "rgb(248, 96, 93)",
              data: this.histo.map(x => x.sell)
            },
            {
              label: "Neutral",
              backgroundColor: "rgb(251, 206, 64)",
              data: this.histo.map(x => x.hold)
            },
            {
              label: "Buy",
              backgroundColor: "#caf270",
              data: this.histo.map(x => x.buy)
            },
            {
              label: "Strong Buy",
              backgroundColor: "rgb(84, 185, 52)",
              data: this.histo.map(x => x.strongBuy)
            }
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  display: false
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  display: false
                }
              }
            ]
          },
          legend: { display: false }
        }
      });
      stackedBar.update();
    }
  }
}
