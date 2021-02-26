import { PokeShareInfoService } from './../poke-share-info.service';
import { PokeAPIServiceService } from './../poke-apiservice.service';
import { Pokemon, PokeDetail } from './../pokemon';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService, PokeShareInfoService]
})
export class MyComponentComponent implements OnInit {

  id = '';
  selectedPokeId = '';
  searchPokeName = '';
  pokeDetail!: PokeDetail;
  pokes: Pokemon[] = [];

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {
  }
  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.pokeService.getPokemon().subscribe((data) => {
      // permet d'instancier des pokémons et les mettre dans un tableau
       data.results.forEach((e: any, index: any) => {
        this.pokes.push(new Pokemon(index, e.name, e.url));
      });
    } );
  }

  // permet d'afficher l'id du pokemon selectionné dans la console
  go(): void {
    if (this.selectedPokeId !== '') {
      // tslint:disable-next-line: deprecation
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }

}
