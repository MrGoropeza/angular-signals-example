import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from "primeng/panel";

@Component({
  selector: "app-root",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  imports: [RouterModule, MenubarModule, PanelModule],
  template: `
    <main class="app-container">
      <p-menubar [model]="menuItems">
        <ng-template pTemplate="end">
          <img src="assets/siltium-logo.svg" height="30" />
        </ng-template>
      </p-menubar>
      <p-panel class="app-panel">
        <router-outlet></router-outlet>
      </p-panel>
    </main>
  `,
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: "Signals vs RxJS",
      routerLink: "",
    },
  ];
}
