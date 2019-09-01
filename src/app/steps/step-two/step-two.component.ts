import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardPriority} from "../../models/card-priority.model";
import {Card} from "../../models/card.model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Input() left: CardPriority;
  @Input() right: CardPriority;
  @Output() next = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() show = new EventEmitter<Card>();
  @Output() drop = new EventEmitter<CdkDragDrop<Array<Card>>>();

  when(expr) {
    return () => !!expr;
  }
}
