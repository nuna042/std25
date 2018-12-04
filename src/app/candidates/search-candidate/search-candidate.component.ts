import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {

  searchCandidateForm: FormGroup;

  searchCandidateMessages = {
    'cid': '13 หลัก',
    'name': 'ชื่อ - นามสกุล',
    'fName': 'ชื่อ',
    'lName': 'นามสกุล',
    'btn_search': 'ค้นหา',
    'btn_reset': 'ล้าง'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchCandidateForm = this.fb.group({
      cid: [''],
      fName: [''],
      lName:['']
    });
  }

  onSubmit(): void {
    console.log(this.searchCandidateForm.value);
  }

}
