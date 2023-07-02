import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Moment from "moment";

const moment = Moment;

@Injectable()
export class FinnhubService {
  constructor(private http: HttpClient) {}

  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=bvqts6n48v6ptdtktf9g";

  //Search Asset
  searchAssets(search: string) {
    return this.http.get(this.configUrl + "search?q=" + search + this.token);
  }

  // Company quote
  getQuote(symbol: string) {
    return this.http.get(
      this.configUrl + "quote?symbol=" + symbol + this.token
    );
  }

  // Company profile
  getCompanyProfile(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/profile2?symbol=" + symbol + this.token
    );
  }
  // Company target price
  getTargetPrice(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/price-target?symbol=" + symbol + this.token
    );
  }

  // Company trend  ATTENTION
  getTrend(symbol: string) {
    return this.http.get(
      this.configUrl +
        "scan/technical-indicator?symbol=" +
        symbol +
        "&resolution=D" +
        this.token
    );
  }

  // Company histo sentiment
  getHistoSentiment(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/recommendation?symbol=" + symbol + this.token
    );
  }

  // Company buzz
  getBuzz(symbol: string) {
    return this.http.get(
      this.configUrl + "news-sentiment?symbol=" + symbol + this.token
    );
  }

  // Latest news
  getLastNews(symbol: string) {
    return this.http.get(
      this.configUrl +
        "company-news?symbol=" +
        symbol +
        "&from=" +
        moment()
          .subtract(5, "days")
          .format("Y-MM-DD") +
        "&to=" +
        moment().format("Y-MM-DD") +
        this.token
    );
  }

  // Earnings
  getEarnings(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/earnings?symbol=" + symbol + this.token
    );
  }
}
