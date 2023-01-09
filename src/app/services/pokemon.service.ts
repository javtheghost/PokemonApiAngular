import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonesResponse,  } from '../interfaces/pokemon';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = environment.api;
  private enPoint = environment.endPoint;
  private limitPage = 20;
  private offsetPage = 0;

  constructor(private http:HttpClient) { }

  get params(){
    return {
      limit:this.limitPage,
      offset:this.offsetPage
    }
  }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<PokemonesResponse>(`${this.api}${this.enPoint}`, {
      params:this.params
    }).pipe(
      map(res =>res.results)
    )
  }

  getPaginacionAnterior(atras: number){
    this.offsetPage = this.offsetPage - atras;
    if (this.offsetPage === 0){
      localStorage.setItem('valor', 'detener');
    }
    return this.http.get<PokemonesResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.offsetPage}`).pipe(
      map(res =>res.results)
    )
  }
  getPaginacionSiguiente(adelante:number){
    this.offsetPage = this.offsetPage + adelante;

    return this.http.get<PokemonesResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.offsetPage}`).pipe(
      map(res =>res.results)
    )
  }
}
