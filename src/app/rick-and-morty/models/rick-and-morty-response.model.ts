export interface RickAndMortyResponse<Model> {
  info: RickAndMortyResponseInfo;
  results: Model[];
}

export interface RickAndMortyResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
