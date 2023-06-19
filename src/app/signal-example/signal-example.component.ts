import { Component, computed, signal } from "@angular/core";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: "app-signal-example",
  standalone: true,
  imports: [CounterComponent],
  template: `
    <app-counter
      title="Con Signals"
      (onIncrease)="increase()"
      (onDecrease)="decrease()"
    >
      <h2>Cuenta: {{ counter() }}</h2>
      <h2>Cuenta doble: {{ doubleCounter() }}</h2>
    </app-counter>
  `,
})
export class SignalExampleComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  increase() {
    this.counter.update((prev) => prev + 1);
  }

  decrease() {
    this.counter.update((prev) => prev - 1);
  }
}
