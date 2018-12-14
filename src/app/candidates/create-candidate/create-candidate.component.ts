import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChangwatService } from '../../services/changwat.service';
import { AmphoeService } from '../../services/amphoe.service';
import { TambonService } from '../../services/tambon.service';
import { Changwat } from '../../models/changwat.model';
import { Amphoe } from '../../models/amphoe.model';
import { Tambon } from '../../models/tambon.model';
import { PersonalService } from '../../services/personal.service';

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
    'gender': { 'male': 'ชาย', 'female': 'หญิง' },
    'dob': 'วันเกิด',
    'addr': 'ที่อยู่',
    'changwat': 'จังหวัด',
    'amphoe': 'อำเภอ',
    'tambon': 'ตำบล',
    'tel': 'โทรศัพท์',
    'btn_save': 'บันทึก'
  }

  titles = ['นาย', 'นาง', 'นางสาว'];
  age: number[];

  changwats: Observable<Changwat[]>;
  amphoes: Observable<Amphoe[]>;
  tambons: Observable<Tambon[]>;

  constructor(private changwatService: ChangwatService,
              private amphoeService: AmphoeService,
              private tambonService: TambonService,
              private personalService: PersonalService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.changwats = this.changwatService.getChangwats();
    this.amphoes = this.amphoeService.getAmphoes('96');
    this.tambons = this.tambonService.getTambons('9601');

    this.createCandidateForm = this.fb.group({
      cid: [''],
      titleName: ['นาย'],
      fName: [''],
      lName: [''],
      gender: ['male'],
      dob: ['3/8/2526'],
      addr1: [''],
      addr2: [''],
      changwat: ['96'],
      amphoe: ['9601'],
      tambon: ['960101'],
      tel: ['']
    });
  }

  onSubmit(): void {
    console.log(this.createCandidateForm.value);
  }

  onLoadDataClick(): void {
    console.log(this.titles);
  }

  fileterGender(): void {
    if (this.createCandidateForm.value.titleName == "นาย") {
      this.createCandidateForm.controls.gender.setValue('male');
    } else {
      this.createCandidateForm.controls.gender.setValue('female');
    }
  }

  filterAmphoe(): void {
    //console.log(this.createCandidateForm);
    this.createCandidateForm.controls.tambon.reset();
    this.amphoes = this.amphoeService.getAmphoes(this.createCandidateForm.value.changwat);
  }

  filterTambon(): void {
    this.tambons = this.tambonService.getTambons(this.createCandidateForm.value.amphoe);
  }

  calAge(): void {
    this.age = this.personalService.getAge(this.createCandidateForm.controls.dob.value);
  }

  checkCID(): void {    
    console.log(this.personalService.checkCID(this.createCandidateForm.controls.cid.value));
  }
}
