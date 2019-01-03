import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  createPerson(name, price) {
    const uri = 'http://localhost:3000/person/create';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getPersons() {
    const uri = 'http://localhost:3000/person';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editPerson(id) {
    const uri = 'http://localhost:3000/person/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  checkCID(_cid): boolean {
    if (_cid.length != 13) return false;
    for (var i = 0, sum = 0; i < 12; i++)
      sum += parseFloat(_cid.charAt(i)) * (13 - i); if ((11 - sum % 11) % 10 != parseFloat(_cid.charAt(12)))
      return false; return true;
  }

  getAge(_date): any {
    console.log(_date);
    _date = _date.split("/");
    var result = {};
    var date = _date[0]; var month = _date[1]; var year = _date[2];
    month = month - 1;
    year = year - 543;

    var today = new Date();
    var dateStr = today.getDate();
    var monthStr = today.getMonth();
    var yearStr = today.getFullYear();

    var theYear = yearStr - year;
    var theMonth = monthStr - month;
    var theDate = dateStr - date;

    var days = 0;
    if (monthStr == 0 || monthStr == 2 || monthStr == 4 || monthStr == 6 || monthStr == 7 || monthStr == 9 || monthStr == 11) { days = 31; }
    if (monthStr == 3 || monthStr == 5 || monthStr == 8 || monthStr == 10) { days = 30; }
    if (monthStr == 1) { days = 28; }

    var inYears = theYear;

    if (month < monthStr && date > dateStr) {
      inYears = inYears + 1;
      var inMonths = theMonth - 1;
    };

    var inMonths = 0;

    if (month < monthStr && date <= dateStr) {
      inMonths = theMonth;
    } else if (month == monthStr && (date < dateStr || date == dateStr)) {
      inMonths = 0;
    } else if (month == monthStr && date > dateStr) {
      inMonths = 11;
    } else if (month > monthStr && date <= dateStr) {
      inYears = inYears - 1;
      inMonths = ((12 - -(theMonth)) + 1);
    } else if (month > monthStr && date > dateStr) {
      inMonths = ((12 - -(theMonth)));
    };

    var inDays = 0;
    if (date < dateStr) {
      inDays = theDate;
    } else if (date == dateStr) {
      inDays = 0;
    } else {
      inYears = inYears - 1;
      inDays = days - (-(theDate));
    };

    return result = {
      day: inDays,
      month: inMonths,
      year: inYears,
    };
  }
}
