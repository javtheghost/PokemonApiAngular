import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',
  pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'pokemon/:nombre', component:DetailPokemonComponent},
  {path:'pokemon/:texto', component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
