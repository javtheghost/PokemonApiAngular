import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  pokemones:Pokemon[] = [];
  adelante = 0;
  atras = 0;
  btnActive = true;
  constructor(private _pokemonService:PokemonService) { }

  ngOnInit(): void {
    localStorage.removeItem('valor');
    this.getPokemones();
  }

  getPokemones() {
    this._pokemonService.getPokemons().subscribe(res=>{
      this.pokemones = res;
    });
  }
  paginarAnterior(){
    this.atras= 20;
    this._pokemonService.getPaginacionAnterior(this.atras).subscribe(res=>{
      this.pokemones = res;

      if(localStorage.getItem('valor') === 'detener'){
        this.btnActive = true;
      }
    });
  }

  paginarSiguiente(){
    this.adelante= 20;
    this._pokemonService.getPaginacionSiguiente(this.adelante).subscribe(res=>{
      this.pokemones = res;
    })
    localStorage.removeItem('valor');
    this.btnActive = false;

  }
}
