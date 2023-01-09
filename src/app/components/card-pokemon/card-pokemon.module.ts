import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [CardPokemonComponent],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [CardPokemonComponent]
})
export class CardPokemonModule { }
