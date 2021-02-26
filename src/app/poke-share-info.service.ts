import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public stringVar = new Subject<string>();
  // value = '';

  getObservable(): Subject<string>{
    return this.stringVar;
  }
 /* getValue(): string{
    return this.value;
  }*/

  setValue(newStringVar: string): void {
    this.stringVar.next(newStringVar);
  }
}
