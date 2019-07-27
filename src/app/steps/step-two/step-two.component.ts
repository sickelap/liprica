import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Input() deck;
  @Input() priority;
  @Output() next = new EventEmitter();
  @Output() reset = new EventEmitter();
}
