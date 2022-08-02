import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {

  public _connecte: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  public setConnecte(connecte: boolean) {
    this._connecte.next(connecte)
  }
}
