import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHANGWATS } from '../mock-changwat';
import { Changwat } from '../models/changwat.model';

@Injectable({
  providedIn: 'root'
})
export class ChangwatService {

  constructor() { }
  
  getChangwats(): Observable<Changwat[]> {
    return of(CHANGWATS);
  }
}
