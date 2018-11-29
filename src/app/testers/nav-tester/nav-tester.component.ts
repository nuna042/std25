import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tester',
  templateUrl: './nav-tester.component.html',
  styleUrls: ['./nav-tester.component.css']
})
export class NavTesterComponent implements OnInit {

  navTestersMessages = {
    'panelTitle': 'รายการผู้ทดสอบ',
    'list': 'รายการ',
    'create': 'เพิ่มผู้ทดสอบ'
  }
  constructor() { }

  ngOnInit() {
  }

}
