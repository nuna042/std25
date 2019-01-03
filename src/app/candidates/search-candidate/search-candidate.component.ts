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
    'firstName': 'ชื่อ',
    'lastName': 'นามสกุล',
    'btn_search': 'ค้นหา',
    'btn_reset': 'ล้าง'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchCandidateForm = this.fb.group({
      cid: [''],
      firstName: [''],
      lastName:['']
    });
  }

  onSubmit(): void {
    console.log(this.searchCandidateForm.value);
  }

}
