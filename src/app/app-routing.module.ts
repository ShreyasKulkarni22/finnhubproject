import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

import { TestComponent } from "./test/test.component";
import { HomeComponent } from "./home/home.component";
import { DetailStockComponent } from "./detail-stock/detail-stock.component";

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "stocks/:id", component: DetailStockComponent },
  { path: "**", component: HomeComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
