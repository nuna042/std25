(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidates-candidates-module"],{

/***/ "./src/app/candidates/candidates-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/candidates/candidates-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CandidatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesRoutingModule", function() { return CandidatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_candidates_nav_candidates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-candidates/nav-candidates.component */ "./src/app/candidates/nav-candidates/nav-candidates.component.ts");
/* harmony import */ var _create_candidate_create_candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-candidate/create-candidate.component */ "./src/app/candidates/create-candidate/create-candidate.component.ts");
/* harmony import */ var _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-candidate/search-candidate.component */ "./src/app/candidates/search-candidate/search-candidate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _nav_candidates_nav_candidates_component__WEBPACK_IMPORTED_MODULE_2__["NavCandidatesComponent"],
        children: [
            { path: 'search-candidate', component: _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_4__["SearchCandidateComponent"] },
            { path: 'create-candidate', component: _create_candidate_create_candidate_component__WEBPACK_IMPORTED_MODULE_3__["CreateCandidateComponent"] }
        ]
    }
];
var CandidatesRoutingModule = /** @class */ (function () {
    function CandidatesRoutingModule() {
    }
    CandidatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CandidatesRoutingModule);
    return CandidatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/candidates/candidates.module.ts":
/*!*************************************************!*\
  !*** ./src/app/candidates/candidates.module.ts ***!
  \*************************************************/
/*! exports provided: CandidatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesModule", function() { return CandidatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidates_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidates-routing.module */ "./src/app/candidates/candidates-routing.module.ts");
/* harmony import */ var _create_candidate_create_candidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-candidate/create-candidate.component */ "./src/app/candidates/create-candidate/create-candidate.component.ts");
/* harmony import */ var _nav_candidates_nav_candidates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-candidates/nav-candidates.component */ "./src/app/candidates/nav-candidates/nav-candidates.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-candidate/search-candidate.component */ "./src/app/candidates/search-candidate/search-candidate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CandidatesModule = /** @class */ (function () {
    function CandidatesModule() {
    }
    CandidatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_create_candidate_create_candidate_component__WEBPACK_IMPORTED_MODULE_3__["CreateCandidateComponent"], _nav_candidates_nav_candidates_component__WEBPACK_IMPORTED_MODULE_4__["NavCandidatesComponent"], _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_6__["SearchCandidateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _candidates_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidatesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], CandidatesModule);
    return CandidatesModule;
}());



/***/ }),

/***/ "./src/app/candidates/create-candidate/create-candidate.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/candidates/create-candidate/create-candidate.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvY3JlYXRlLWNhbmRpZGF0ZS9jcmVhdGUtY2FuZGlkYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/candidates/create-candidate/create-candidate.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/candidates/create-candidate/create-candidate.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"createCandidateForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label for=\"inputCid\" class=\"col-sm-2 control-label\">{{createCandidateMessages.cid}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputCid\" formControlName=\"cid\" placeholder=\"{{createCandidateMessages.cid}}\">\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.titleName}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <select class=\"form-control\" formControlName=\"titleName\">\r\n        <option *ngFor=\"let title of titles\" value=\"{{title}}\">{{title}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"inputFName\" class=\"col-sm-2 control-label\">{{createCandidateMessages.name}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputFName\" formControlName=\"fName\" placeholder=\"{{createCandidateMessages.fName}}\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputLName\" formControlName=\"lName\" placeholder=\"{{createCandidateMessages.lName}}\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"inputGender\" class=\"col-sm-2 control-label\">{{createCandidateMessages.genderTitle}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <select class=\"form-control\" formControlName=\"gender\">\r\n        <option value=\"M\">{{createCandidateMessages.gender.men}}</option>\r\n        <option value=\"F\">{{createCandidateMessages.gender.women}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"inputDob\" class=\"col-sm-2 control-label\">{{createCandidateMessages.dob}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputDob\" formControlName=\"dob\" placeholder=\"{{createCandidateMessages.dob}}\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.addr}}</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputAddr1\" formControlName=\"addr1\" placeholder=\"{{createCandidateMessages.addr}}\">\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-2 col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputAddr2\" formControlName=\"addr2\" placeholder=\"{{createCandidateMessages.addr}}\">\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.province}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <select class=\"form-control\" formControlName=\"province\">\r\n        <option *ngFor=\"let province of provinces | async\" value=\"{{province.pid}}\">{{province.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.amphur}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <select class=\"form-control\" formControlName=\"amphur\">\r\n        <option value=\"M\">{{createCandidateMessages.gender.men}}</option>\r\n        <option value=\"F\">{{createCandidateMessages.gender.women}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.tambon}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <select class=\"form-control\" formControlName=\"tambon\">\r\n        <option value=\"M\">{{createCandidateMessages.gender.men}}</option>\r\n        <option value=\"F\">{{createCandidateMessages.gender.women}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"input\" class=\"col-sm-2 control-label\">{{createCandidateMessages.tel}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputTel\" formControlName=\"tel\" placeholder=\"{{createCandidateMessages.tel}}\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-2 col-sm-10\">\r\n      <div class=\"btn-toolbar\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">{{createCandidateMessages.btn_save}}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onLoadDataClick()\">Load</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/candidates/create-candidate/create-candidate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/candidates/create-candidate/create-candidate.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCandidateComponent", function() { return CreateCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_provinces_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/provinces.service */ "./src/app/services/provinces.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCandidateComponent = /** @class */ (function () {
    function CreateCandidateComponent(provincesService, fb) {
        this.provincesService = provincesService;
        this.fb = fb;
        this.createCandidateMessages = {
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
        };
        this.titles = ['นาย', 'นาง', 'นางสาว'];
    }
    CreateCandidateComponent.prototype.ngOnInit = function () {
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
    };
    CreateCandidateComponent.prototype.onSubmit = function () {
        console.log(this.createCandidateForm.value);
    };
    CreateCandidateComponent.prototype.onLoadDataClick = function () {
        console.log(this.titles);
    };
    CreateCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-candidate',
            template: __webpack_require__(/*! ./create-candidate.component.html */ "./src/app/candidates/create-candidate/create-candidate.component.html"),
            styles: [__webpack_require__(/*! ./create-candidate.component.css */ "./src/app/candidates/create-candidate/create-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [_services_provinces_service__WEBPACK_IMPORTED_MODULE_2__["ProvincesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateCandidateComponent);
    return CreateCandidateComponent;
}());



/***/ }),

/***/ "./src/app/candidates/nav-candidates/nav-candidates.component.css":
/*!************************************************************************!*\
  !*** ./src/app/candidates/nav-candidates/nav-candidates.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvbmF2LWNhbmRpZGF0ZXMvbmF2LWNhbmRpZGF0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/candidates/nav-candidates/nav-candidates.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/candidates/nav-candidates/nav-candidates.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">{{navCandidatesMessages.panelTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputBlank\" class=\"col-sm-offset-2 control-label\"></label>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"btn-toolbar\">\r\n          <a class=\"btn btn-default\" routerLink=\"./search-candidate\" routerLinkActive=\"active\" role=\"button\"><i class=\"fa fa-list\"></i>\r\n            {{navCandidatesMessages.search}}</a>\r\n          <a class=\"btn btn-default\" routerLink=\"./create-candidate\" routerLinkActive=\"active\" role=\"button\"><i class=\"fa fa-plus-square\"></i>\r\n            {{navCandidatesMessages.create}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-30\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/candidates/nav-candidates/nav-candidates.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/candidates/nav-candidates/nav-candidates.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavCandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCandidatesComponent", function() { return NavCandidatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavCandidatesComponent = /** @class */ (function () {
    function NavCandidatesComponent() {
        this.navCandidatesMessages = {
            'panelTitle': 'รายการผู้เข้ารับการทดสอบ',
            'search': 'ค้นหา',
            'create': 'เพิ่มผู้สมัคร',
            'code': 'รหัสผู้ทดสอบ',
            'name': 'ชื่อ - นามสกุล',
            'btn-save': 'บันทึก'
        };
    }
    NavCandidatesComponent.prototype.ngOnInit = function () {
    };
    NavCandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-candidates',
            template: __webpack_require__(/*! ./nav-candidates.component.html */ "./src/app/candidates/nav-candidates/nav-candidates.component.html"),
            styles: [__webpack_require__(/*! ./nav-candidates.component.css */ "./src/app/candidates/nav-candidates/nav-candidates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavCandidatesComponent);
    return NavCandidatesComponent;
}());



/***/ }),

/***/ "./src/app/candidates/search-candidate/search-candidate.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/candidates/search-candidate/search-candidate.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvc2VhcmNoLWNhbmRpZGF0ZS9zZWFyY2gtY2FuZGlkYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/candidates/search-candidate/search-candidate.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/candidates/search-candidate/search-candidate.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchCandidateForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"inputCid\" class=\"col-sm-2 control-label\">{{searchCandidateMessages.cid}}</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" id=\"inputCid\" formControlName=\"cid\" placeholder=\"{{searchCandidateMessages.cid}}\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputFName\" class=\"col-sm-2 control-label\">{{searchCandidateMessages.name}}</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"inputFName\" formControlName=\"fName\" placeholder=\"{{searchCandidateMessages.fName}}\">\n    </div>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"inputLName\" formControlName=\"lName\" placeholder=\"{{searchCandidateMessages.lName}}\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"btn-toolbar\">\n        <button type=\"submit\" class=\"btn btn-primary\">{{searchCandidateMessages.btn_search}}</button>\n        <button type=\"button\" class=\"btn btn-primary\">{{searchCandidateMessages.btn_reset}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onLoadDataClick()\">Load</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/candidates/search-candidate/search-candidate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/candidates/search-candidate/search-candidate.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCandidateComponent", function() { return SearchCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchCandidateComponent = /** @class */ (function () {
    function SearchCandidateComponent(fb) {
        this.fb = fb;
        this.searchCandidateMessages = {
            'cid': '13 หลัก',
            'name': 'ชื่อ - นามสกุล',
            'fName': 'ชื่อ',
            'lName': 'นามสกุล',
            'btn_search': 'ค้นหา',
            'btn_reset': 'ล้าง'
        };
    }
    SearchCandidateComponent.prototype.ngOnInit = function () {
        this.searchCandidateForm = this.fb.group({
            cid: [''],
            fName: [''],
            lName: ['']
        });
    };
    SearchCandidateComponent.prototype.onSubmit = function () {
        console.log(this.searchCandidateForm.value);
    };
    SearchCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-candidate',
            template: __webpack_require__(/*! ./search-candidate.component.html */ "./src/app/candidates/search-candidate/search-candidate.component.html"),
            styles: [__webpack_require__(/*! ./search-candidate.component.css */ "./src/app/candidates/search-candidate/search-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchCandidateComponent);
    return SearchCandidateComponent;
}());



/***/ }),

/***/ "./src/app/mock-provinces.ts":
/*!***********************************!*\
  !*** ./src/app/mock-provinces.ts ***!
  \***********************************/
/*! exports provided: PROVINCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVINCES", function() { return PROVINCES; });
var PROVINCES = [
    {
        "pid": "10",
        "name": "กรุงเทพมหานคร"
    },
    {
        "pid": "11",
        "name": "สมุทรปราการ"
    },
    {
        "pid": "12",
        "name": "นนทบุรี"
    },
    {
        "pid": "13",
        "name": "ปทุมธานี"
    },
    {
        "pid": "14",
        "name": "พระนครศรีอยุธยา"
    },
    {
        "pid": "15",
        "name": "อ่างทอง"
    },
    {
        "pid": "16",
        "name": "ลพบุรี"
    },
    {
        "pid": "17",
        "name": "สิงห์บุรี"
    },
    {
        "pid": "18",
        "name": "ชัยนาท"
    },
    {
        "pid": "19",
        "name": "สระบุรี"
    },
    {
        "pid": "20",
        "name": "ชลบุรี"
    },
    {
        "pid": "21",
        "name": "ระยอง"
    },
    {
        "pid": "22",
        "name": "จันทบุรี"
    },
    {
        "pid": "23",
        "name": "ตราด"
    },
    {
        "pid": "24",
        "name": "ฉะเชิงเทรา"
    },
    {
        "pid": "25",
        "name": "ปราจีนบุรี"
    },
    {
        "pid": "26",
        "name": "นครนายก"
    },
    {
        "pid": "27",
        "name": "สระแก้ว"
    },
    {
        "pid": "30",
        "name": "นครราชสีมา"
    },
    {
        "pid": "31",
        "name": "บุรีรัมย์"
    },
    {
        "pid": "32",
        "name": "สุรินทร์"
    },
    {
        "pid": "33",
        "name": "ศรีสะเกษ"
    },
    {
        "pid": "34",
        "name": "อุบลราชธานี"
    },
    {
        "pid": "35",
        "name": "ยโสธร"
    },
    {
        "pid": "36",
        "name": "ชัยภูมิ"
    },
    {
        "pid": "37",
        "name": "อำนาจเจริญ"
    },
    {
        "pid": "38",
        "name": "บึงกาฬ"
    },
    {
        "pid": "39",
        "name": "หนองบัวลำภู"
    },
    {
        "pid": "40",
        "name": "ขอนแก่น"
    },
    {
        "pid": "41",
        "name": "อุดรธานี"
    },
    {
        "pid": "42",
        "name": "เลย"
    },
    {
        "pid": "43",
        "name": "หนองคาย"
    },
    {
        "pid": "44",
        "name": "มหาสารคาม"
    },
    {
        "pid": "45",
        "name": "ร้อยเอ็ด"
    },
    {
        "pid": "46",
        "name": "กาฬสินธุ์"
    },
    {
        "pid": "47",
        "name": "สกลนคร"
    },
    {
        "pid": "48",
        "name": "นครพนม"
    },
    {
        "pid": "49",
        "name": "มุกดาหาร"
    },
    {
        "pid": "50",
        "name": "เชียงใหม่"
    },
    {
        "pid": "51",
        "name": "ลำพูน"
    },
    {
        "pid": "52",
        "name": "ลำปาง"
    },
    {
        "pid": "53",
        "name": "อุตรดิตถ์"
    },
    {
        "pid": "54",
        "name": "แพร่"
    },
    {
        "pid": "55",
        "name": "น่าน"
    },
    {
        "pid": "56",
        "name": "พะเยา"
    },
    {
        "pid": "57",
        "name": "เชียงราย"
    },
    {
        "pid": "58",
        "name": "แม่ฮ่องสอน"
    },
    {
        "pid": "60",
        "name": "นครสวรรค์"
    },
    {
        "pid": "61",
        "name": "อุทัยธานี"
    },
    {
        "pid": "62",
        "name": "กำแพงเพชร"
    },
    {
        "pid": "63",
        "name": "ตาก"
    },
    {
        "pid": "64",
        "name": "สุโขทัย"
    },
    {
        "pid": "65",
        "name": "พิษณุโลก"
    },
    {
        "pid": "66",
        "name": "พิจิตร"
    },
    {
        "pid": "67",
        "name": "เพชรบูรณ์"
    },
    {
        "pid": "70",
        "name": "ราชบุรี"
    },
    {
        "pid": "71",
        "name": "กาญจนบุรี"
    },
    {
        "pid": "72",
        "name": "สุพรรณบุรี"
    },
    {
        "pid": "73",
        "name": "นครปฐม"
    },
    {
        "pid": "74",
        "name": "สมุทรสาคร"
    },
    {
        "pid": "75",
        "name": "สมุทรสงคราม"
    },
    {
        "pid": "76",
        "name": "เพชรบุรี"
    },
    {
        "pid": "77",
        "name": "ประจวบคีรีขันธ์"
    },
    {
        "pid": "80",
        "name": "นครศรีธรรมราช"
    },
    {
        "pid": "81",
        "name": "กระบี่"
    },
    {
        "pid": "82",
        "name": "พังงา"
    },
    {
        "pid": "83",
        "name": "ภูเก็ต"
    },
    {
        "pid": "84",
        "name": "สุราษฎร์ธานี"
    },
    {
        "pid": "85",
        "name": "ระนอง"
    },
    {
        "pid": "86",
        "name": "ชุมพร"
    },
    {
        "pid": "90",
        "name": "สงขลา"
    },
    {
        "pid": "91",
        "name": "สตูล"
    },
    {
        "pid": "92",
        "name": "ตรัง"
    },
    {
        "pid": "93",
        "name": "พัทลุง"
    },
    {
        "pid": "94",
        "name": "ปัตตานี"
    },
    {
        "pid": "95",
        "name": "ยะลา"
    },
    {
        "pid": "96",
        "name": "นราธิวาส"
    }
];


/***/ }),

/***/ "./src/app/services/provinces.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/provinces.service.ts ***!
  \***********************************************/
/*! exports provided: ProvincesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvincesService", function() { return ProvincesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_provinces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-provinces */ "./src/app/mock-provinces.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProvincesService = /** @class */ (function () {
    function ProvincesService() {
    }
    ProvincesService.prototype.getProvinces = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_provinces__WEBPACK_IMPORTED_MODULE_2__["PROVINCES"]);
    };
    ProvincesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProvincesService);
    return ProvincesService;
}());



/***/ })

}]);
//# sourceMappingURL=candidates-candidates-module.js.map