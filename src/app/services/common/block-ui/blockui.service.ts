import { Injectable } from "@angular/core";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Injectable({
  providedIn: "root",
})
export class BlockuiService {
  @BlockUI("mainblockui") private blockUI!: NgBlockUI;

  constructor() { }

  start(message?: string) {
    this.blockUI.start(message);
  }

  stop() {
    this.blockUI.stop();
  }
}
