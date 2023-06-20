import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { InputNumberModule } from "primeng/inputnumber";
import { ButtonSeverityDirectiveDirective } from "src/app/shared/directives/button-severity.directive";

@Component({
  selector: "app-counter",
  standalone: true,
  styles: [
    `
      .buttons-container {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        align-items: center;
      }

      .button-container {
        width: 3rem;
        height: 3rem;
      }
    `,
  ],
  imports: [
    ButtonModule,
    FieldsetModule,
    InputNumberModule,
    FormsModule,
    ButtonSeverityDirectiveDirective,
  ],
  template: `
    <p-fieldset [legend]="title" [toggleable]="true">
      <ng-content></ng-content>

      <div class="buttons-container">
        <div class="p-inputgroup">
          <p-inputNumber
            [(ngModel)]="inputValue"
            styleClass="p-inputtext-sm"
            (onKeyDown)="onKeyDown($event)"
          ></p-inputNumber>
          <button
            pButton
            type="button"
            icon="pi pi-arrow-up"
            buttonSeverity="info"
            (click)="setValue()"
          ></button>
        </div>

        <div class="button-container">
          <button
            pButton
            type="button"
            icon="pi pi-minus"
            class="p-button-rounded"
            buttonSeverity="danger"
            (click)="onDecrease.emit()"
          ></button>
        </div>

        <div class="button-container">
          <button
            pButton
            type="button"
            icon="pi pi-plus"
            class="p-button-rounded"
            buttonSeverity="success"
            (click)="onIncrease.emit()"
          ></button>
        </div>
      </div>
    </p-fieldset>
  `,
})
export class CounterComponent {
  inputValue = 0;

  @Input() title = "";
  @Output() onSet = new EventEmitter<number>();
  @Output() onIncrease = new EventEmitter();
  @Output() onDecrease = new EventEmitter();

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") this.setValue();
  }

  setValue() {
    this.onSet.emit(this.inputValue);
    this.inputValue = 0;
  }
}
