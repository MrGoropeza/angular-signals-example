import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";

@Component({
  selector: "app-counter",
  standalone: true,
  styles: [
    `
      .buttons-container {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
    `,
  ],
  imports: [ButtonModule, FieldsetModule],
  template: `
    <p-fieldset [legend]="title" [toggleable]="true">
      <ng-content></ng-content>

      <div class="buttons-container">
        <p-button (onClick)="onIncrease.emit()">Aumentar</p-button>
        <p-button (onClick)="onDecrease.emit()">Decrementar</p-button>
      </div>
    </p-fieldset>
  `,
})
export class CounterComponent {
  @Input() title = "";
  @Output() onIncrease = new EventEmitter();
  @Output() onDecrease = new EventEmitter();
}
