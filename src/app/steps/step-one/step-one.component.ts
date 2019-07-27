import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Card} from "../../models/card.model";
import {CardPriority} from "../../models/card-priority.model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {CardFormComponent} from "../../components/card-form/card-form.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  @Input() cards: Array<Card>;
  @Input() priorities: Array<CardPriority>;
  @Output() next = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() show = new EventEmitter<Card>();
  @Output() drop = new EventEmitter<CdkDragDrop<Array<Card>>>();

  constructor(private dialog: MatDialog) {
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
}
