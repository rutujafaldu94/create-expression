import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, copyArrayItem } from "@angular/cdk/drag-drop";

interface FunctionConfig {
  name: string;
  args: number;
}

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  function_names: FunctionConfig[] = [
    { name: "add", args: 2 },
    { name: "subtract", args: 2 },
    { name: "foo", args: 3 },
    { name: "doSomethingComplex", args: 1 }
  ];

  mainDivArray: FunctionConfig[] = [];
  numberOfArgs: number[];

  constructor() {}
  ngOnInit() {}

  droppedIntoMain(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      if (this.mainDivArray.length === 0) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        this.numberOfArgs = Array(this.mainDivArray[0].args).fill(0);
      }
    }
  }

  droppedIntoFunctionList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.mainDivArray = [];
      this.numberOfArgs = [];
    }
  }
}
