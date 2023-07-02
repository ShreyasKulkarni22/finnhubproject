import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FinnhubService } from "../finnhub.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private finn: FinnhubService) {}

  ngOnInit() {}
  public model: any;
  search = "";
  results: any;
  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three"];

  modelChangeFn(e) {
    this.search = e;
    if (this.search.length > 1) {
      this.searchAsset();
    }
  }

  searchAsset() {
    this.finn.searchAssets(this.search).subscribe((data: String) => {
      this.results = data["result"];
    });
  }
}
