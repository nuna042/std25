import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-tester',
  templateUrl: './create-tester.component.html',
  styleUrls: ['./create-tester.component.css']
})
export class CreateTesterComponent implements OnInit {

  testerForm: FormGroup;

  createTestersMessages = {
    'code': 'รหัสผู้ทดสอบ',
    'name': 'ชื่อ - นามสกุล',
    'btn_save': 'บันทึก'
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testerForm = this.fb.group({
      testerCode: ['มฝร-'],
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
