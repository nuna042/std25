import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-create-tester',
  templateUrl: './create-tester.component.html',
  styleUrls: ['./create-tester.component.css']
})
export class CreateTesterComponent implements OnInit {

  testerForm: FormGroup;
  testerMessages = {
    'panelTitle': 'รายการผู้ทดสอบ',
    'list': 'รายการ',
    'create': 'เพิ่มผู้ทดสอบ',
    'code': 'รหัสผู้ทดสอบ',
    'name': 'ชื่อ - นามสกุล',
    'btn-save': 'บันทึก'
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testerForm = this.fb.group({
      testerCode: ['มฝร'],
      fName: [''],
      lName:['']
    });
  }

  onSubmit(): void {
    console.log(this.testerForm.value);
  }

  onLoadDataClick(): void {
    this.testerForm.patchValue({
      testerCode: ['มฝร-1-204-5555'],
      fName: ['charat'],
      lName:['thepsoh']
    });
  }

}
