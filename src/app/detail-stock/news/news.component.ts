import { Component, Input, OnInit, SimpleChange } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  @Input() articles: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChange) {
  }
}
