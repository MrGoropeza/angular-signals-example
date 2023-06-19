import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { InputNumberModule } from "primeng/inputnumber";

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

      .input-container {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    `,
  ],
  imports: [ButtonModule, FieldsetModule, InputNumberModule, FormsModule],
  template: `
    <p-fieldset [legend]="title" [toggleable]="true">
      <ng-content></ng-content>

      <div class="buttons-container">
        <div class="p-inputgroup">
          <p-inputNumber
            [(ngModel)]="inputValue"
            styleClass="p-inputtext-sm"
          ></p-inputNumber>
          <button
            pButton
            type="button"
            icon="pi pi-arrow-up"
            class="p-button-info"
            (click)="onSet.emit(inputValue); inputValue = 0"
          ></button>
        </div>

        <p-button
          (onClick)="onDecrease.emit()"
          icon="pi pi-minus"
          styleClass="p-button-danger p-button-rounded"
        ></p-button>

        <p-button
          (onClick)="onIncrease.emit()"
          icon="pi pi-plus"
          styleClass="p-button-success p-button-rounded"
        ></p-button>
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
}
