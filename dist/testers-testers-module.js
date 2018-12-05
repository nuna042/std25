(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testers-testers-module"],{

/***/ "./src/app/mock-testers.ts":
/*!*********************************!*\
  !*** ./src/app/mock-testers.ts ***!
  \*********************************/
/*! exports provided: TESTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTERS", function() { return TESTERS; });
var TESTERS = [
    {
        "cid": "5c00fcf338b43ce91539d5c5",
        "code": "consectetur",
        "titleName": "นางสาว",
        "fName": "Candy",
        "lName": "Joyce",
        "age": 26,
        "gender": "female",
        "company": "ZOLAREX",
        "email": "candyjoyce@zolarex.com",
        "phone": 887659323
    },
    {
        "cid": "5c00fcf3aa7cabb561cb8549",
        "code": "commodo",
        "titleName": "นาย",
        "fName": "Hilary",
        "lName": "Chase",
        "age": 26,
        "gender": "female",
        "company": "INVENTURE",
        "email": "hilarychase@inventure.com",
        "phone": 891440434
    },
    {
        "cid": "5c00fcf3db79cfa8f9a55bd6",
        "code": "esse",
        "titleName": "นาย",
        "fName": "Alberta",
        "lName": "Kent",
        "age": 30,
        "gender": "female",
        "company": "PLASTO",
        "email": "albertakent@plasto.com",
        "phone": 897841434
    },
    {
        "cid": "5c00fcf3b6fe2415c4a454be",
        "code": "tempor",
        "titleName": "นางสาว",
        "fName": "Franklin",
        "lName": "Wooten",
        "age": 36,
        "gender": "male",
        "company": "IMKAN",
        "email": "franklinwooten@imkan.com",
        "phone": 891741525
    },
    {
        "cid": "5c00fcf32fcb2d9afdb3ac00",
        "code": "ipsum",
        "titleName": "นาย",
        "fName": "Pam",
        "lName": "Hanson",
        "age": 29,
        "gender": "female",
        "company": "INFOTRIPS",
        "email": "pamhanson@infotrips.com",
        "phone": 887653323
    },
    {
        "cid": "5c00fcf3ebef4bd6529069ee",
        "code": "minim",
        "titleName": "นาง",
        "fName": "Cherry",
        "lName": "Figueroa",
        "age": 21,
        "gender": "female",
        "company": "ENVIRE",
        "email": "cherryfigueroa@envire.com",
        "phone": 890156239
    },
    {
        "cid": "5c00fcf36295b34a3ed27360",
        "code": "adipisicing",
        "titleName": "นางสาว",
        "fName": "Hall",
        "lName": "Morse",
        "age": 35,
        "gender": "male",
        "company": "KROG",
        "email": "hallmorse@krog.com",
        "phone": 888656033
    },
    {
        "cid": "5c00fcf351e76621fd85e39e",
        "code": "mollit",
        "titleName": "นาย",
        "fName": "Sheree",
        "lName": "Navarro",
        "age": 25,
        "gender": "female",
        "company": "STROZEN",
        "email": "shereenavarro@strozen.com",
        "phone": 897950829
    },
    {
        "cid": "5c00fcf394c068108a214c3c",
        "code": "irure",
        "titleName": "นาย",
        "fName": "Sharron",
        "lName": "Macdonald",
        "age": 37,
        "gender": "female",
        "company": "TURNLING",
        "email": "sharronmacdonald@turnling.com",
        "phone": 887146327
    }
];


/***/ }),

/***/ "./src/app/testers/create-tester/create-tester.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/testers/create-tester/create-tester.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlcnMvY3JlYXRlLXRlc3Rlci9jcmVhdGUtdGVzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/testers/create-tester/create-tester.component.html":
/*!********************************************************************!*\
  !*** ./src/app/testers/create-tester/create-tester.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"testerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n  <div class=\"form-group\">\r\n    <label for=\"inputTesterCode\" class=\"col-sm-2 control-label\">{{createTestersMessages.code}}</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputTesterCode\" formControlName=\"testerCode\" placeholder=\"{{createTestersMessages.code}}\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"inputTesterCid\" class=\"col-sm-2 control-label\">{{createTestersMessages.cid}}</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputTesterCid\" formControlName=\"testerCid\" placeholder=\"{{createTestersMessages.cid}}\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"inputFName\" class=\"col-sm-2 control-label\">{{createTestersMessages.name}}</label>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputFName\" formControlName=\"fName\" placeholder=\"{{createTestersMessages.fName}}\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputLName\" formControlName=\"lName\" placeholder=\"{{createTestersMessages.lName}}\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-sm-offset-2 col-sm-10\">\r\n      <div class=\"btn-toolbar\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">{{createTestersMessages.btn_save}}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onLoadDataClick()\">Load</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/testers/create-tester/create-tester.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/testers/create-tester/create-tester.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTesterComponent", function() { return CreateTesterComponent; });
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


var CreateTesterComponent = /** @class */ (function () {
    function CreateTesterComponent(fb) {
        this.fb = fb;
        this.createTestersMessages = {
            'cid': '13 หลัก',
            'code': 'รหัสผู้ทดสอบ',
            'name': 'ชื่อ - นามสกุล',
            'fName': 'ชื่อ',
            'lName': 'นามสกุล',
            'btn_save': 'บันทึก'
        };
    }
    CreateTesterComponent.prototype.ngOnInit = function () {
        this.testerForm = this.fb.group({
            testerCid: [''],
            testerCode: ['มฝร-'],
            fName: [''],
            lName: ['']
        });
    };
    CreateTesterComponent.prototype.onSubmit = function () {
        console.log(this.testerForm.value);
    };
    CreateTesterComponent.prototype.onLoadDataClick = function () {
        this.testerForm.patchValue({
            testerCid: [''],
            testerCode: ['มฝร-1-204-5555'],
            fName: ['charat'],
            lName: ['thepsoh']
        });
    };
    CreateTesterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-tester',
            template: __webpack_require__(/*! ./create-tester.component.html */ "./src/app/testers/create-tester/create-tester.component.html"),
            styles: [__webpack_require__(/*! ./create-tester.component.css */ "./src/app/testers/create-tester/create-tester.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateTesterComponent);
    return CreateTesterComponent;
}());



/***/ }),

/***/ "./src/app/testers/list-testers/list-testers.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/testers/list-testers/list-testers.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlcnMvbGlzdC10ZXN0ZXJzL2xpc3QtdGVzdGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/testers/list-testers/list-testers.component.html":
/*!******************************************************************!*\
  !*** ./src/app/testers/list-testers/list-testers.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\r\n  <tr>\r\n    <th *ngFor=\"let col of columns\">\r\n      {{col}}\r\n    </th>\r\n  </tr>\r\n  <tr *ngFor=\"let tester of testers | async\">\r\n    <td>{{tester.code}}</td>\r\n    <td>{{tester.fName}} {{tester.lName}}</td>\r\n    <td><i class=\"fa fa-pencil\"></i> | <i class=\"fa fa-close\"></i></td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/testers/list-testers/list-testers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/testers/list-testers/list-testers.component.ts ***!
  \****************************************************************/
/*! exports provided: ListTestersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTestersComponent", function() { return ListTestersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tester_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tester.service */ "./src/app/testers/tester.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListTestersComponent = /** @class */ (function () {
    function ListTestersComponent(testerService) {
        this.testerService = testerService;
    }
    ListTestersComponent.prototype.ngOnInit = function () {
        this.columns = this.testerService.getColumns();
        this.testers = this.testerService.getTesters();
    };
    ListTestersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-testers',
            template: __webpack_require__(/*! ./list-testers.component.html */ "./src/app/testers/list-testers/list-testers.component.html"),
            styles: [__webpack_require__(/*! ./list-testers.component.css */ "./src/app/testers/list-testers/list-testers.component.css")]
        }),
        __metadata("design:paramtypes", [_tester_service__WEBPACK_IMPORTED_MODULE_1__["TesterService"]])
    ], ListTestersComponent);
    return ListTestersComponent;
}());



/***/ }),

/***/ "./src/app/testers/nav-tester/nav-tester.component.css":
/*!*************************************************************!*\
  !*** ./src/app/testers/nav-tester/nav-tester.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlcnMvbmF2LXRlc3Rlci9uYXYtdGVzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/testers/nav-tester/nav-tester.component.html":
/*!**************************************************************!*\
  !*** ./src/app/testers/nav-tester/nav-tester.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">{{navTestersMessages.panelTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputBlank\" class=\"col-sm-offset-2 control-label\"></label>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"btn-toolbar\">\r\n          <a class=\"btn btn-default\" routerLink=\"./list-testers\" role=\"button\"><i class=\"fa fa-list\"></i>\r\n            {{navTestersMessages.list}}</a>\r\n          <a class=\"btn btn-default\" routerLink=\"./create-tester\" role=\"button\"><i class=\"fa fa-plus-square\"></i>\r\n            {{navTestersMessages.create}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-30\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/testers/nav-tester/nav-tester.component.ts":
/*!************************************************************!*\
  !*** ./src/app/testers/nav-tester/nav-tester.component.ts ***!
  \************************************************************/
/*! exports provided: NavTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTesterComponent", function() { return NavTesterComponent; });
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

var NavTesterComponent = /** @class */ (function () {
    function NavTesterComponent() {
        this.navTestersMessages = {
            'panelTitle': 'รายการผู้ทดสอบ',
            'list': 'รายการ',
            'create': 'เพิ่มผู้ทดสอบ'
        };
    }
    NavTesterComponent.prototype.ngOnInit = function () {
    };
    NavTesterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-tester',
            template: __webpack_require__(/*! ./nav-tester.component.html */ "./src/app/testers/nav-tester/nav-tester.component.html"),
            styles: [__webpack_require__(/*! ./nav-tester.component.css */ "./src/app/testers/nav-tester/nav-tester.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavTesterComponent);
    return NavTesterComponent;
}());



/***/ }),

/***/ "./src/app/testers/tester.service.ts":
/*!*******************************************!*\
  !*** ./src/app/testers/tester.service.ts ***!
  \*******************************************/
/*! exports provided: TesterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterService", function() { return TesterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_testers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-testers */ "./src/app/mock-testers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TesterService = /** @class */ (function () {
    function TesterService() {
    }
    TesterService.prototype.getTesters = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_testers__WEBPACK_IMPORTED_MODULE_1__["TESTERS"]);
    };
    TesterService.prototype.getColumns = function () {
        return ["รหัสผู้ทดสอบ", "ชื่อ - นามสกุล", "..."];
    };
    ;
    TesterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TesterService);
    return TesterService;
}());



/***/ }),

/***/ "./src/app/testers/testers-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/testers/testers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestersRoutingModule", function() { return TestersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_testers_list_testers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-testers/list-testers.component */ "./src/app/testers/list-testers/list-testers.component.ts");
/* harmony import */ var _create_tester_create_tester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-tester/create-tester.component */ "./src/app/testers/create-tester/create-tester.component.ts");
/* harmony import */ var _nav_tester_nav_tester_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-tester/nav-tester.component */ "./src/app/testers/nav-tester/nav-tester.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _nav_tester_nav_tester_component__WEBPACK_IMPORTED_MODULE_4__["NavTesterComponent"],
        children: [
            { path: 'list-testers', component: _list_testers_list_testers_component__WEBPACK_IMPORTED_MODULE_2__["ListTestersComponent"] },
            { path: 'create-tester', component: _create_tester_create_tester_component__WEBPACK_IMPORTED_MODULE_3__["CreateTesterComponent"] }
        ]
    }
];
var TestersRoutingModule = /** @class */ (function () {
    function TestersRoutingModule() {
    }
    TestersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TestersRoutingModule);
    return TestersRoutingModule;
}());



/***/ }),

/***/ "./src/app/testers/testers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/testers/testers.module.ts ***!
  \*******************************************/
/*! exports provided: TestersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestersModule", function() { return TestersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _testers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testers-routing.module */ "./src/app/testers/testers-routing.module.ts");
/* harmony import */ var _create_tester_create_tester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-tester/create-tester.component */ "./src/app/testers/create-tester/create-tester.component.ts");
/* harmony import */ var _list_testers_list_testers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-testers/list-testers.component */ "./src/app/testers/list-testers/list-testers.component.ts");
/* harmony import */ var _nav_tester_nav_tester_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-tester/nav-tester.component */ "./src/app/testers/nav-tester/nav-tester.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TestersModule = /** @class */ (function () {
    function TestersModule() {
    }
    TestersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_create_tester_create_tester_component__WEBPACK_IMPORTED_MODULE_3__["CreateTesterComponent"], _list_testers_list_testers_component__WEBPACK_IMPORTED_MODULE_4__["ListTestersComponent"], _nav_tester_nav_tester_component__WEBPACK_IMPORTED_MODULE_5__["NavTesterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _testers_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], TestersModule);
    return TestersModule;
}());



/***/ })

}]);
//# sourceMappingURL=testers-testers-module.js.map