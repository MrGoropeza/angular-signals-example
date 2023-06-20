import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";
import { Character } from "../../models/character.model";

@Component({
  selector: "app-character-card",
  standalone: true,
  styleUrls: ["./character-card.component.scss"],
  imports: [CommonModule, CardModule],
  template: `
    <p-card [subheader]="character.name">
      <ng-template pTemplate="header">
        <img
          [src]="character.image"
          [alt]="character.name"
          width="240"
          height="240"
          style="object-fit: scale-down;"
        />
      </ng-template>
    </p-card>
  `,
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
