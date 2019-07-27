import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Card} from "../../models/card.model";
import {CardPriority} from "../../models/card-priority.model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

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
  @Output() create = new EventEmitter();
  @Output() show = new EventEmitter<Card>();
  @Output() drop = new EventEmitter<CdkDragDrop<Array<Card>>>();
}
