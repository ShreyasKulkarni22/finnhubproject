import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FinnhubService } from "./finnhub.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { DetailStockComponent } from "./detail-stock/detail-stock.component";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from "./home/home.component";
import { DescriptionComponent } from "./detail-stock/description/description.component";
import { PriceTargetComponent } from "./detail-stock/price-target/price-target.component";
import { EarningsComponent } from "./detail-stock/earnings/earnings.component";
import { TrendComponent } from "./detail-stock/trend/trend.component";
import { HistoSentComponent } from "./detail-stock/histo-sent/histo-sent.component";
import { BuzzComponent } from "./detail-stock/buzz/buzz.component";
import { NewsComponent } from "./detail-stock/news/news.component";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailStockComponent,
    TestComponent,
    HomeComponent,
    DescriptionComponent,
    PriceTargetComponent,
    EarningsComponent,
    TrendComponent,
    HistoSentComponent,
    BuzzComponent,
    NewsComponent
  ],
  bootstrap: [AppComponent],
  providers: [FinnhubService]
})
export class AppModule {}
