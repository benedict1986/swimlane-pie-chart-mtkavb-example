import { Component, NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { single } from "./data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = "below";

  colorScheme = {
    domain: ["#5AA454", "#A10A28"]
  };

  constructor() {
    Object.assign(this, { single });
  }

  async ngOnInit(): Promise<void> {
    for (let i = 0; i < 1000; i++) {
      console.info(i);
      this.single = Object.assign(
        [],
        [
          {
            name: "Germany",
            value: i
          },
          {
            name: "USA",
            value: 1000 - i
          }
        ]
      );
      await this.sleep(33);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
