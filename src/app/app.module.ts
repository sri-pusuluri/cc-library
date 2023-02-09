import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { GroupsComponent } from './cards/groups/groups.component';
import { LibraryCardComponent } from './cards/library-card/library-card.component';
import { LibraryCardV2Component } from './cards/librarycard-v2/librarycard-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    LibraryCardComponent,
    LibraryCardV2Component,
    CardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
