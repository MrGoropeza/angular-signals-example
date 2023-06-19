import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RxjsExampleComponent } from "./rxjs-example/rxjs-example.component";
import { SignalExampleComponent } from "./signal-example/signal-example.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SignalExampleComponent,
    RxjsExampleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
