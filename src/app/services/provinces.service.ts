import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROVINCES } from '../mock-provinces';

@Injectable({
  providedIn: 'root'
})

export class ProvincesService {

  constructor() { }
  
  getProvinces(): Observable<any[]> {
    return of(PROVINCES);
  }

}
