import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Tester Edit');
  }


  branchObj = [
    {name : 'electric', id: '1'},
    {name : 'ms word', id: '2'},
  ];

  testerObj = [
    {name : 'test1 xx1', code: '1234'},
    {name : 'test2 xx2', code: '5678'},
  ];
  

}
