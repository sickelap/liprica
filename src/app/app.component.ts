import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {MatDialog, MatStepper} from "@angular/material";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {Card} from "./models/card.model";
import {CardComponent} from "./components/card/card.component";
import {CardPriority} from "./models/card-priority.model";
import {CardFormComponent} from "./components/card-form/card-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild(MatStepper, {static: true}) stepper;
  cards: Array<Card>;
  priorities: Array<CardPriority>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.initializeContent();
  }

  onNext() {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  onDrop(event: CdkDragDrop<Array<Card>>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.previousContainer.data === this.cards ? 0 : event.container.data.length
      );
    }
  }

  onShow(card: Card) {
    this.dialog.open(CardComponent, {data: card});
  }

  onCreate() {
    const subscription = this.dialog
      .open(CardFormComponent, {width: '300px'})
      .afterClosed()
      .subscribe(card => {
        if (card) {
          this.priorities[0].items.push(card);
        }
        subscription.unsubscribe();
      });
  }

  onReset() {
    this.ngOnInit();
    this.stepper.reset();
  }

  private initializeContent() {
    this.cards = Array(2).fill(null).map((_, idx) => {
      return {
        title: `Title ${idx + 1}`,
        content: `Content ${idx + 1}`,
        weight: 5
      };
    });

    this.priorities = [
      {items: [], label: 'Very important to me'},
      {items: [], label: 'Important to me'},
      {items: [], label: 'Less important to me'},
    ];
  }
}
