import { Injectable } from '@angular/core';
import { AMPHOES } from '../mock-amphoe';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Amphoe } from '../models/amphoe.model';

@Injectable({
  providedIn: 'root'
})
export class AmphoeService {

  constructor() { }

  getAmphoes(changwat_pid: string): Observable<Amphoe[]> {       
    return of(AMPHOES).pipe(map(result => result.filter(amphoe => amphoe.changwat_pid == changwat_pid)));
  }
}
