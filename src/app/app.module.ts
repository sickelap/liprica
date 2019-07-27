import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatStepperModule,
  MatToolbarModule
} from "@angular/material";
import {HeaderComponent} from './components/header/header.component';
import {CardComponent} from './components/card/card.component';
import {StepOneComponent} from './steps/step-one/step-one.component';
import {StepTwoComponent} from './steps/step-two/step-two.component';
import {StepThreeComponent} from './steps/step-three/step-three.component';
import {StepFourComponent} from './steps/step-four/step-four.component';
import {CardFormComponent} from './components/card-form/card-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent, CardFormComponent]
})
export class AppModule {
}
