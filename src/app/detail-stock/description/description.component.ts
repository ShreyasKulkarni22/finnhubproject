import { Component, OnInit, Input, SimpleChange } from "@angular/core";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"]
})
export class DescriptionComponent implements OnInit {
  @Input() description: string;
  show = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChange) {
    if (this.description){
      this.show = true
    }
    else {
      this.show = false
    }
    
  }
}
