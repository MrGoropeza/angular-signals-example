import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Character } from "../models/character.model";
import { RickAndMortyResponse } from "../models/rick-and-morty-response.model";

@Injectable()
export class CharacterService {
  private http = inject(HttpClient);
  private url = environment.rickAndMortyApiUrl + "character/";

  getCharacters(page: number = 1): Observable<RickAndMortyResponse<Character>> {
    return this.http.get<RickAndMortyResponse<Character>>(this.url, {
      params: { page },
    });
  }
}
