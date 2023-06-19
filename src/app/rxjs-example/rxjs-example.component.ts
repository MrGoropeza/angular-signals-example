import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: "app-rxjs-example",
  standalone: true,
  imports: [CommonModule, CounterComponent],
  template: `
    <app-counter
      title="Con RxJS"
      (onIncrease)="increase()"
      (onDecrease)="decrease()"
      (onSet)="set($event)"
    >
      <h2>Cuenta: {{ counter$ | async }}</h2>
      <h2>Cuenta doble: {{ doubleCounter$ | async }}</h2>
    </app-counter>
  `,
})
export class RxjsExampleComponent {
  counter$ = new BehaviorSubject(0);
  doubleCounter$ = this.counter$.pipe(map((value) => value * 2));

  set(value: number) {
    this.counter$.next(value);
  }

  increase() {
    this.counter$.next(this.counter$.value + 1);
  }

  decrease() {
    this.counter$.next(this.counter$.value - 1);
  }
}
