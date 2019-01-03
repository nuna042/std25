import { Injectable } from '@angular/core';
import { TAMBONS } from '../mock-tambon';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tambon } from '../models/tambon.model';
import { Amphoe } from '../models/amphoe.model';

@Injectable({
  providedIn: 'root'
})
export class TambonService {

  constructor() { }
  
  getTambons(amphoe_pid: String): Observable<Tambon[]> {       
    return of(TAMBONS).pipe(map(result => result.filter(tambon => tambon.amphoe_pid == amphoe_pid)));
  }
}
