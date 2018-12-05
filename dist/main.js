(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./candidates/candidates.module": [
		"./src/app/candidates/candidates.module.ts",
		"candidates-candidates-module"
	],
	"./cert/cert.module": [
		"./src/app/cert/cert.module.ts",
		"cert-cert-module"
	],
	"./skill-testing/skill-testing.module": [
		"./src/app/skill-testing/skill-testing.module.ts",
		"skill-testing-skill-testing-module"
	],
	"./testers/testers.module": [
		"./src/app/testers/testers.module.ts",
		"testers-testers-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'testers', loadChildren: './testers/testers.module#TestersModule' },
    { path: 'candidates', loadChildren: './candidates/candidates.module#CandidatesModule' },
    { path: 'skill-testing', loadChildren: './skill-testing/skill-testing.module#SkillTestingModule' },
    { path: 'cert', loadChildren: './cert/cert.module#CertModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//export const routingComponents = [CreateTesterComponent, ListTestersComponent]


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n  <!-- Main content -->\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n<app-appfooter></app-appfooter>\n<app-appsetting></app-appsetting>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'ระบบงานมาตรฐานฝีมือแรงงาน สพร 25 นธ';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTitle(this.title);
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/appheader/appheader.component */ "./src/app/components/appheader/appheader.component.ts");
/* harmony import */ var _components_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/appfooter/appfooter.component */ "./src/app/components/appfooter/appfooter.component.ts");
/* harmony import */ var _components_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/appmenu/appmenu.component */ "./src/app/components/appmenu/appmenu.component.ts");
/* harmony import */ var _components_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/appsetting/appsetting.component */ "./src/app/components/appsetting/appsetting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"],
                _components_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"],
                _components_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__["AppmenuComponent"],
                _components_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/appfooter/appfooter.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/appfooter/appfooter.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwZm9vdGVyL2FwcGZvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/appfooter/appfooter.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/appfooter/appfooter.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.4.0\n  </div>\n  <strong>Copyright &copy; 2014-2016\n    <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights reserved.\n</footer>"

/***/ }),

/***/ "./src/app/components/appfooter/appfooter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/appfooter/appfooter.component.ts ***!
  \*************************************************************/
/*! exports provided: AppfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function() { return AppfooterComponent; });
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

var AppfooterComponent = /** @class */ (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    AppfooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appfooter',
            template: __webpack_require__(/*! ./appfooter.component.html */ "./src/app/components/appfooter/appfooter.component.html"),
            styles: [__webpack_require__(/*! ./appfooter.component.css */ "./src/app/components/appfooter/appfooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppfooterComponent);
    return AppfooterComponent;
}());



/***/ }),

/***/ "./src/app/components/appheader/appheader.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/appheader/appheader.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwaGVhZGVyL2FwcGhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/appheader/appheader.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/appheader/appheader.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\">\n      <b>A</b>LT</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\">\n      <b>Admin</b>LTE</span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small>\n                        <i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small>\n                        <i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Developers\n                      <small>\n                        <i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small>\n                        <i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small>\n                        <i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">See All Messages</a>\n            </li>\n          </ul>\n        </li>\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-user text-red\"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all</a>\n            </li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Create a nice theme\n                      <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Some task I need to do\n                      <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Make beautiful transitions\n                      <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n                        aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">Alexander Pierce</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Alexander Pierce - Web Developer\n                <small>Member since Nov. 2012</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\">\n            <i class=\"fa fa-gears\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/appheader/appheader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/appheader/appheader.component.ts ***!
  \*************************************************************/
/*! exports provided: AppheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppheaderComponent", function() { return AppheaderComponent; });
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

var AppheaderComponent = /** @class */ (function () {
    function AppheaderComponent() {
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    AppheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appheader',
            template: __webpack_require__(/*! ./appheader.component.html */ "./src/app/components/appheader/appheader.component.html"),
            styles: [__webpack_require__(/*! ./appheader.component.css */ "./src/app/components/appheader/appheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppheaderComponent);
    return AppheaderComponent;
}());



/***/ }),

/***/ "./src/app/components/appmenu/appmenu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/appmenu/appmenu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwbWVudS9hcHBtZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/appmenu/appmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/appmenu/appmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- Sidebar user panel -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>Alexander Pierce</p>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li class=\"header\">MAIN NAVIGATION</li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/candidates\">\r\n          <i class=\"fa fa-users\"></i>\r\n          <span>{{menuMessages.candidate}}</span>\r\n        </a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/skill-testing\">\r\n          <i class=\"fa fa-folder-open\"></i>\r\n          <span>{{menuMessages.skill_testing}}</span>\r\n        </a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/cert\">\r\n          <i class=\"fa fa-mortar-board\"></i>\r\n          <span>{{menuMessages.cert}}</span>\r\n        </a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a routerLink=\"/testers\">\r\n          <i class=\"fa fa-user\"></i>\r\n          <span>{{menuMessages.tester}}</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview menu-open\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-dashboard\"></i>\r\n          <span>Dashboard</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"index.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Dashboard v1</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <a href=\"index2.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Dashboard v2</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-files-o\"></i>\r\n          <span>Layout Options</span>\r\n          <span class=\"pull-right-container\">\r\n            <span class=\"label label-primary pull-right\">4</span>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/layout/top-nav.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Top Navigation</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/layout/boxed.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Boxed</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/layout/fixed.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Fixed</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/layout/collapsed-sidebar.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/widgets.html\">\r\n          <i class=\"fa fa-th\"></i>\r\n          <span>Widgets</span>\r\n          <span class=\"pull-right-container\">\r\n            <small class=\"label pull-right bg-green\">new</small>\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-pie-chart\"></i>\r\n          <span>Charts</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/charts/chartjs.html\">\r\n              <i class=\"fa fa-circle-o\"></i> ChartJS</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/charts/morris.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Morris</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/charts/flot.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Flot</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/charts/inline.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Inline charts</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-laptop\"></i>\r\n          <span>UI Elements</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/UI/general.html\">\r\n              <i class=\"fa fa-circle-o\"></i> General</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/UI/icons.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Icons</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/UI/buttons.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Buttons</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/UI/sliders.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Sliders</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/UI/timeline.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Timeline</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/UI/modals.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Modals</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-edit\"></i>\r\n          <span>Forms</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/forms/general.html\">\r\n              <i class=\"fa fa-circle-o\"></i> General Elements</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/forms/advanced.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Advanced Elements</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/forms/editors.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Editors</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-table\"></i>\r\n          <span>Tables</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/tables/simple.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Simple tables</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/tables/data.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Data tables</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/calendar.html\">\r\n          <i class=\"fa fa-calendar\"></i>\r\n          <span>Calendar</span>\r\n          <span class=\"pull-right-container\">\r\n            <small class=\"label pull-right bg-red\">3</small>\r\n            <small class=\"label pull-right bg-blue\">17</small>\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"pages/mailbox/mailbox.html\">\r\n          <i class=\"fa fa-envelope\"></i>\r\n          <span>Mailbox</span>\r\n          <span class=\"pull-right-container\">\r\n            <small class=\"label pull-right bg-yellow\">12</small>\r\n            <small class=\"label pull-right bg-green\">16</small>\r\n            <small class=\"label pull-right bg-red\">5</small>\r\n          </span>\r\n        </a>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-folder\"></i>\r\n          <span>Examples</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"pages/examples/invoice.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Invoice</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/profile.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Profile</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/login.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Login</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/register.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Register</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/lockscreen.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Lockscreen</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/404.html\">\r\n              <i class=\"fa fa-circle-o\"></i> 404 Error</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/500.html\">\r\n              <i class=\"fa fa-circle-o\"></i> 500 Error</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/blank.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Blank Page</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"pages/examples/pace.html\">\r\n              <i class=\"fa fa-circle-o\"></i> Pace Page</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-share\"></i>\r\n          <span>Multilevel</span>\r\n          <span class=\"pull-right-container\">\r\n            <i class=\"fa fa-angle-left pull-right\"></i>\r\n          </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-circle-o\"></i> Level One</a>\r\n          </li>\r\n          <li class=\"treeview\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-circle-o\"></i> Level One\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li>\r\n                <a href=\"#\">\r\n                  <i class=\"fa fa-circle-o\"></i> Level Two</a>\r\n              </li>\r\n              <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                  <i class=\"fa fa-circle-o\"></i> Level Two\r\n                  <span class=\"pull-right-container\">\r\n                    <i class=\"fa fa-angle-left pull-right\"></i>\r\n                  </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                  <li>\r\n                    <a href=\"#\">\r\n                      <i class=\"fa fa-circle-o\"></i> Level Three</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">\r\n                      <i class=\"fa fa-circle-o\"></i> Level Three</a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-circle-o\"></i> Level One</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://adminlte.io/docs\">\r\n          <i class=\"fa fa-book\"></i>\r\n          <span>Documentation</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"header\">LABELS</li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-red\"></i>\r\n          <span>Important</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-yellow\"></i>\r\n          <span>Warning</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-circle-o text-aqua\"></i>\r\n          <span>Information</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "./src/app/components/appmenu/appmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/appmenu/appmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: AppmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppmenuComponent", function() { return AppmenuComponent; });
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

var AppmenuComponent = /** @class */ (function () {
    function AppmenuComponent() {
        this.menuMessages = {
            'tester': 'ผู้ทดสอบ',
            'candidate': 'ผู้เข้ารับการทดสอบ',
            'skill_testing': 'กำหนดรุ่น',
            'cert': 'หนังสือรับรอง',
        };
    }
    AppmenuComponent.prototype.ngOnInit = function () {
    };
    AppmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appmenu',
            template: __webpack_require__(/*! ./appmenu.component.html */ "./src/app/components/appmenu/appmenu.component.html"),
            styles: [__webpack_require__(/*! ./appmenu.component.css */ "./src/app/components/appmenu/appmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppmenuComponent);
    return AppmenuComponent;
}());



/***/ }),

/***/ "./src/app/components/appsetting/appsetting.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/appsetting/appsetting.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwc2V0dGluZy9hcHBzZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/appsetting/appsetting.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/appsetting/appsetting.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\r\n<aside class=\"control-sidebar control-sidebar-dark\">\r\n  <!-- Create the tabs -->\r\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n    <li>\r\n      <a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\">\r\n        <i class=\"fa fa-home\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\">\r\n        <i class=\"fa fa-gears\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <!-- Home tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n              <p>Will be 23 on April 24th</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n              <p>New phone +1(800)555-1234</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n              <p>nora@example.com</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n              <p>Execution time 5 seconds</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Custom Template Design\r\n              <span class=\"label label-danger pull-right\">70%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Update Resume\r\n              <span class=\"label label-success pull-right\">95%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Laravel Integration\r\n              <span class=\"label label-warning pull-right\">50%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0)\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Back End Framework\r\n              <span class=\"label label-primary pull-right\">68%</span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n    </div>\r\n  </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/components/appsetting/appsetting.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/appsetting/appsetting.component.ts ***!
  \***************************************************************/
/*! exports provided: AppsettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsettingComponent", function() { return AppsettingComponent; });
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

var AppsettingComponent = /** @class */ (function () {
    function AppsettingComponent() {
    }
    AppsettingComponent.prototype.ngOnInit = function () {
    };
    AppsettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appsetting',
            template: __webpack_require__(/*! ./appsetting.component.html */ "./src/app/components/appsetting/appsetting.component.html"),
            styles: [__webpack_require__(/*! ./appsetting.component.css */ "./src/app/components/appsetting/appsetting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppsettingComponent);
    return AppsettingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\traning\angular\std25\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map