import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  private form: FormGroup;

  constructor(private dialogRef: MatDialogRef<CardFormComponent>) {
  }

  ngOnInit() {
    this.form = CardFormComponent.createForm();
  }

  private static createForm(): FormGroup {
    const titleValidator = Validators.compose([Validators.required, Validators.minLength(3)]);
    return new FormGroup({
      title: new FormControl('', titleValidator),
      content: new FormControl(''),
      weight: new FormControl(5)
    })
  }
}
