import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  menuMessages = {
    'tester': 'ผู้ทดสอบ',
    'candidate': 'ผู้เข้ารับการทดสอบ',
    'skill_testing': 'กำหนดรุ่น',
    'cert': 'หนังสือรับรอง',
  }
  constructor() { }

  ngOnInit() {
  }

}
