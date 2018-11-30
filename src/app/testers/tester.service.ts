import { Injectable } from '@angular/core';
import { TESTERS } from '../mock-testers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TesterService {

  constructor() { }

  getTesters(): Observable<any[]> {
    return of(TESTERS);
  }

  getColumns(): string[] {
    return ["รหัสผู้ทดสอบ", "ชื่อ - นามสกุล", "..."];
  };
}
