import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { CardPokemonModule } from './components/card-pokemon/card-pokemon.module';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailPokemonComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CardPokemonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
