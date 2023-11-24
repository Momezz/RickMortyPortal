import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterDetailComponent } from './views/character-detail/character-detail.component';
import { SearchComponent } from './views/search/search.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    HeaderComponent,
    SearchBarComponent,
    CardDisplayComponent,
    HomeComponent,
    CharacterDetailComponent,
    SearchComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
