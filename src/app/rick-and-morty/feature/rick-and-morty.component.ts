import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { DataViewModule } from "primeng/dataview";
import { BehaviorSubject, Observable, map, switchMap, tap } from "rxjs";
import { CharacterService } from "../data-access/character.service";
import { Character } from "../models/character.model";
import { CharacterCardComponent } from "../ui/character-card/character-card.component";

@Component({
  selector: "app-rick-and-morty",
  standalone: true,
  imports: [CommonModule, DataViewModule, CharacterCardComponent],
  providers: [CharacterService],
  styleUrls: ["./rick-and-morty.component.scss"],
  template: `
    <p-dataView
      layout="grid"
      [lazy]="true"
      [paginator]="true"
      [pageLinks]="3"
      [rows]="20"
      [totalRecords]="(totalRecords$ | async)!"
      [value]="(characters$ | async)!"
      (onPage)="page$.next($event.first / $event.rows + 1)"
    >
      <ng-template let-character pTemplate="gridItem">
        <app-character-card [character]="character"></app-character-card>
      </ng-template>
    </p-dataView>
  `,
})
export class RickAndMortyComponent {
  private characterService = inject(CharacterService);

  page$ = new BehaviorSubject(1);
  totalRecords$ = new BehaviorSubject(0);
  characters$: Observable<Character[]> = this.page$.pipe(
    switchMap((page) =>
      this.characterService.getCharacters(page).pipe(
        tap((response) => this.totalRecords$.next(response.info.count)),
        map((response) => response.results)
      )
    )
  );
}
