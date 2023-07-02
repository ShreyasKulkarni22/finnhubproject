import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap, takeWhile } from "rxjs/operators";
import { FinnhubService } from "../finnhub.service";

@Component({
  selector: "app-detail-stock",
  templateUrl: "./detail-stock.component.html",
  styleUrls: ["./detail-stock.component.css"]
})
export class DetailStockComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private finn: FinnhubService) {}

  symbolA: any;
  price = {};
  quote: any;
  target: any;
  news: any;
  trend: any;
  targetPrice: any;
  profile: any;
  earnings: any;
  buzz: any;
  histo_sent: any;
  results: any;
  alive: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.clearContent();
      this.updateContent();
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  clearContent() {
    this.quote = "";
    this.news = [];
    this.trend = "";
    this.target = null;
    this.profile = "";
    this.histo_sent = [];
    this.buzz = "";
    this.earnings = "";
  }
  updateContent() {
    this.symbolA = this.route.snapshot.paramMap.get("id");
    this.showProfile();
    this.showQuote();
    this.showNews();
    this.showTargetPrice();
    this.showEarnings();
    this.showBuzz();
    this.showTrend();
    this.showHisto();
  }

  showQuote() {
    this.quote = null;
    this.finn
      .getQuote(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.price["quote"] = data;
          this.quote = data;
        },
        err => console.log("Error Happened quote")
      );
  }

  showNews() {
    this.news = [];
    this.finn
      .getLastNews(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.news = data.slice(0, 5);
        },
        err => console.log("Error Happened news")
      );
  }

  showTrend() {
    this.trend = null;
    this.finn
      .getTrend(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.trend = data["technicalAnalysis"];
        },
        err => console.log("Error Happened trend")
      );
  }

  showTargetPrice() {
    this.target = null;
    this.finn
      .getTargetPrice(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.price["target"] = data;
          this.target = data;
        },
        err => console.log("Error Happened target price")
      );
  }

  showProfile() {
    this.profile = null;
    this.finn
      .getCompanyProfile(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.profile = data;
        },
        err => console.log("Error Happened profile")
      );
  }

  // histo
  showHisto() {
    this.histo_sent = [];
    this.finn
      .getHistoSentiment(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String[]) => {
          this.histo_sent = data.reverse();
        },
        err => console.log("Error Happened histo")
      );
  }
  // buzz
  showBuzz() {
    this.buzz = null;
    this.finn
      .getBuzz(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.buzz = data;
        },
        err => console.log("Error Happened Buzz")
      );
  }
  // earnings
  showEarnings() {
    this.earnings = [];
    this.finn
      .getEarnings(this.symbolA)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (data: String) => {
          this.earnings = data;
        },
        err => console.log("Error Happened Earnings", err)
      );
  }
}
