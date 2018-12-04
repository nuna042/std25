import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-skill-testing',
  templateUrl: './nav-skill-testing.component.html',
  styleUrls: ['./nav-skill-testing.component.css']
})
export class NavSkillTestingComponent implements OnInit {

  navSkillTestingMessages = {
    'panelTitle': 'รายการรุ่นการทดสอบ',
    'list': 'รายการ',
    'create': 'เพิ่มรุ่น'
  }

  constructor() { }

  ngOnInit() {
  }

}
