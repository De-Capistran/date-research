import { PokeShareInfoService } from './../poke-share-info.service';
import { PokeDetail } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: [PokeShareInfoService]
})
export class PokedetailComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('detail')
    detail!: PokeDetail;
  constructor(private pokeShareInfoService: PokeShareInfoService) {
    // tslint:disable-next-line: deprecation
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));
  }

  ngOnInit(): void {

  }

}
