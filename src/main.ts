import { HttpClientModule } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";

const APP_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./app/signals-vs-rxjs/signals-vs-rxjs.component").then(
        (c) => c.SignalsVsRxjsComponent
      ),
  },
  {
    path: "rick&morty",
    loadComponent: () =>
      import("./app/rick-and-morty/feature/rick-and-morty.component").then(
        (c) => c.RickAndMortyComponent
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];

const APP_PROVIDERS: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      HttpClientModule
    ),
  ],
};

bootstrapApplication(AppComponent, APP_PROVIDERS).catch((err) =>
  console.error(err)
);
