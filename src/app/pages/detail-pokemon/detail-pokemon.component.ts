import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  imgPokemon: any;
  descripcion: any;

  constructor(private _pokemonService:PokemonService, private activatedRoute: ActivatedRoute) {
    const {nombre} = this.activatedRoute.snapshot.params;
    this._pokemonService.getPokemonDetails(nombre).subscribe(pokemon=>{
      this.imgPokemon = pokemon.sprites.other?.['official-artwork'].front_default
    })
  }

  ngOnInit(): void {
  }

  getPokemonImagen(){

  }
}
