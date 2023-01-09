import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _pokemonService:PokemonService, private router:Router) { }

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

  onClickPokemon(nombre:string){
    this._pokemonService.getPokemonDetails(nombre).subscribe(pokemon=>{
      this.router.navigate(['/pokemon', pokemon.name])
    });
  }
}
