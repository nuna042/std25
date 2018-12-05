import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProvincesService } from '../../services/provinces.service';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  createCandidateForm: FormGroup;

  createCandidateMessages = {
    'cid': '13 หลัก',
    'titleName': 'คำนำหน้า',
    'name': 'ชื่อ - นามสกุล',
    'fName': 'ชื่อ',
    'lName': 'นามสกุล',
    'genderTitle': 'เพศ',
    'gender': { 'men': 'ชาย', 'women': 'หญิง' },
    'dob': 'วันเกิด',
    'addr': 'ที่อยู่',
    'province': 'จังหวัด',
    'amphur': 'อำเภอ',
    'tambon': 'ตำบล',
    'tel': 'โทรศัพท์',
    'btn_save': 'บันทึก'
  }

  titles = ['นาย', 'นาง', 'นางสาว'];
  
  provinces: Observable<any[]>;

  constructor(private provincesService: ProvincesService,private fb: FormBuilder) { }

  ngOnInit() {
    
    this.provinces = this.provincesService.getProvinces();

    this.createCandidateForm = this.fb.group({
      cid: [''],
      titleName: ['นาย'],
      fName: [''],
      lName: [''],
      gender: ['M'],
      dob: ['01/12/2009'],
      addr1: [''],
      addr2: [''],
      province: ['96'],
      amphur: [''],
      tambon: [''],
      tel: ['']
    });

  }

  onSubmit(): void {
    console.log(this.createCandidateForm.value);
  }

  onLoadDataClick(): void {
    console.log(this.titles);
  }

}
