import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styles: [
    `
      .main-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .grow {
        flex-grow: 1;
      }
    `,
  ],
  template: `
    <main class="main-container">
      <app-signal-example class="grow"></app-signal-example>
      <app-rxjs-example class="grow"></app-rxjs-example>
    </main>
  `,
})
export class AppComponent {}
