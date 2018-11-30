import { Component, OnInit } from '@angular/core';
import { TesterService } from '../tester.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-testers',
  templateUrl: './list-testers.component.html',
  styleUrls: ['./list-testers.component.css']
})
export class ListTestersComponent implements OnInit {

  testers: Observable<any[]>;
  columns: string[];

  constructor(private testerService: TesterService) { }

  ngOnInit() {
    this.columns = this.testerService.getColumns();
    this.testers = this.testerService.getTesters();
  }

}
