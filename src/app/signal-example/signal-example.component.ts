import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { CounterComponent } from "../counter/counter.component";
import { TripleCounterPipe } from "../shared/pipes/triple-counter.pipe";

@Component({
  selector: "app-signal-example",
  standalone: true,
  imports: [CommonModule, CounterComponent, TripleCounterPipe],
  template: `
    <app-counter
      title="Con Signals"
      (onIncrease)="increase()"
      (onDecrease)="decrease()"
      (onSet)="set($event)"
    >
      <h2>Cuenta: {{ counter() }}</h2>
      <h2>Cuenta doble: {{ doubleCounter() }}</h2>
      <h2>Cuenta triple: {{ counter() | tripleCounter }}</h2>
    </app-counter>
  `,
})
export class SignalExampleComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  set(value: number) {
    this.counter.set(value);
  }

  increase() {
    this.counter.update((prev) => prev + 1);
  }

  decrease() {
    this.counter.update((prev) => prev - 1);
  }
}
