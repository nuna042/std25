import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-candidates',
  templateUrl: './nav-candidates.component.html',
  styleUrls: ['./nav-candidates.component.css']
})
export class NavCandidatesComponent implements OnInit {

  navCandidatesMessages = {
    'panelTitle': 'รายการผู้เข้ารับการทดสอบ',
    'search': 'ค้นหา',
    'create': 'เพิ่มผู้สมัคร',
    'code': 'รหัสผู้ทดสอบ',
    'name': 'ชื่อ - นามสกุล',
    'btn-save': 'บันทึก'
  }
  constructor() { }

  ngOnInit() {
  }

}
