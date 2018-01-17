webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Webshop';
        this.Ingelogd = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_api_service__ = __webpack_require__("../../../../../src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_producten_producten_component__ = __webpack_require__("../../../../../src/app/components/producten/producten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_producten_productservice_service__ = __webpack_require__("../../../../../src/app/services/producten/productservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_registreren_registreren_component__ = __webpack_require__("../../../../../src/app/components/registreren/registreren.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_winkelwagen_winkelwagen_component__ = __webpack_require__("../../../../../src/app/components/winkelwagen/winkelwagen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_winkelwagen_winkelwagenservice_service__ = __webpack_require__("../../../../../src/app/services/winkelwagen/winkelwagenservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_guard_admin_guard__ = __webpack_require__("../../../../../src/app/guards/guard-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__ = __webpack_require__("../../../../../src/app/guards/inlog.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_inventaris_inventaris_component__ = __webpack_require__("../../../../../src/app/components/inventaris/inventaris.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_zoek_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/zoek-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_toevoegen_toevoegen_component__ = __webpack_require__("../../../../../src/app/components/toevoegen/toevoegen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_klanten_klanten_component__ = __webpack_require__("../../../../../src/app/components/klanten/klanten.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//import { ApiService } from './services/api.service';
//import { AuthorizationService } from './services/authorization.service';
// Create routes
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'producten', component: __WEBPACK_IMPORTED_MODULE_12__components_producten_producten_component__["a" /* ProductenComponent */] },
    { path: 'registreren', component: __WEBPACK_IMPORTED_MODULE_14__components_registreren_registreren_component__["a" /* RegistrerenComponent */] },
    { path: 'winkelwagen', component: __WEBPACK_IMPORTED_MODULE_16__components_winkelwagen_winkelwagen_component__["a" /* WinkelwagenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__["a" /* InlogGuard */]] },
    { path: 'inventaris', component: __WEBPACK_IMPORTED_MODULE_20__components_inventaris_inventaris_component__["a" /* InventarisComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_guard_admin_guard__["a" /* GuardAdminGuard */], __WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__["a" /* InlogGuard */]] },
    { path: 'toevoegen', component: __WEBPACK_IMPORTED_MODULE_22__components_toevoegen_toevoegen_component__["a" /* ToevoegenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_guard_admin_guard__["a" /* GuardAdminGuard */], __WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__["a" /* InlogGuard */]] },
    { path: 'klanten', component: __WEBPACK_IMPORTED_MODULE_23__components_klanten_klanten_component__["a" /* KlantenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_guard_admin_guard__["a" /* GuardAdminGuard */], __WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__["a" /* InlogGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_homepage_homepage_component__["a" /* HomepageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_producten_producten_component__["a" /* ProductenComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_registreren_registreren_component__["a" /* RegistrerenComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_winkelwagen_winkelwagen_component__["a" /* WinkelwagenComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_inventaris_inventaris_component__["a" /* InventarisComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_zoek_filter_pipe__["a" /* ZoekFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_22__components_toevoegen_toevoegen_component__["a" /* ToevoegenComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_klanten_klanten_component__["a" /* KlantenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__guards_inlog_guard__["a" /* InlogGuard */], __WEBPACK_IMPORTED_MODULE_18__guards_guard_admin_guard__["a" /* GuardAdminGuard */], __WEBPACK_IMPORTED_MODULE_13__services_producten_productservice_service__["a" /* ProductserviceService */], __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_10__services_user_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_17__services_winkelwagen_winkelwagenservice_service__["a" /* WinkelwagenserviceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/assets/wallp.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wallp.308e17727b390ea85784.jpg";

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/assets/wallp.jpg") + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "      <!-- Main jumbotron for a primary marketing message or call to action -->\n  \n      <div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1 class=\"display-3\">Welkom</h1>\n          <p>Welkom in deze webshop.</p>\n          <p><a class=\"btn btn-primary btn-lg\" routerLink=\"/producten\" href=\"#\" role=\"button\">Zie onze producten &raquo;</a></p>\n        </div>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inventaris/inventaris.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".block{\r\n    float: left;\r\n   \r\n}\r\n.knop{\r\n    margin-left: 80%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inventaris/inventaris.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n  <h1>Producten</h1>\n</div>\n<div class=\"knop\">\n  <p><a class=\"btn btn-primary btn-lg\" routerLink=\"/toevoegen\" href=\"#\" role=\"button\">Product toevoegen &raquo;</a></p>\n</div>\n\n  <div>\n  <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Zoek op productnaam...\" [(ngModel)]=\"searchString\">\n</div>\n<br>\n<br>\n<div class = \"card\">\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Naam</th>\n      <th scope=\"col\">Prijs</th>\n      <th scope=\"col\">Aantal</th>\n\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let product of producten | zoekFilter : 'naam' : searchString\" >\n      <td >{{product.naam}}</td>\n      <td>{{product.prijs}}</td>\n      <td>{{product.aantal}}</td> \n      <td><button type=\"button\" (click)=\"verwijderProduct(product)\" class=\"btn btn-danger\">Verwijder</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inventaris/inventaris.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventarisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__ = __webpack_require__("../../../../../src/app/services/producten/productservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventarisComponent = (function () {
    function InventarisComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.getAlleProducten().subscribe(function (product) {
            _this.producten = product;
        });
    }
    InventarisComponent.prototype.ngOnInit = function () {
    };
    InventarisComponent.prototype.verwijderProduct = function (product) {
        if (confirm("Weet u zeker dat u dit product wilt verwijderen uit het assortiment?")) {
            this.productService.verwijder(product);
            location.reload();
        }
    };
    return InventarisComponent;
}());
InventarisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inventaris',
        template: __webpack_require__("../../../../../src/app/components/inventaris/inventaris.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inventaris/inventaris.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__["a" /* ProductserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__["a" /* ProductserviceService */]) === "function" && _a || Object])
], InventarisComponent);

var _a;
//# sourceMappingURL=inventaris.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/klanten/klanten.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/klanten/klanten.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Gebruikers</h1>\n\n\n  <div class=\"block\">\n  <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Zoek op achternaam...\" [(ngModel)]=\"searchString\">\n</div>\n<br>\n<br>\n<div class = \"card\">\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Voornaam</th>\n      <th scope=\"col\">Achternaam</th>\n      <th scope=\"col\">E-mailadres</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users | zoekFilter : 'achternaam' : searchString\" >\n      <td >{{user.voornaam}}</td>\n      <td>{{user.achternaam}}</td> \n      <td>{{user.email}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/klanten/klanten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlantenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KlantenComponent = (function () {
    function KlantenComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
        });
    }
    KlantenComponent.prototype.ngOnInit = function () {
    };
    return KlantenComponent;
}());
KlantenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-klanten',
        template: __webpack_require__("../../../../../src/app/components/klanten/klanten.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/klanten/klanten.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], KlantenComponent);

var _a;
//# sourceMappingURL=klanten.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n body, html{\n  height: 100%;\n  background-repeat: no-repeat;\n}\n\n.main{\n  margin-top: 30px;\n}\n\nh1.title { \n font-size: 40px;\n font-weight: bold; \n margin: 0 auto;\n}\n\nhr{\n width: 10%;\n color: #fff;\n}\n\n.form-group{\n margin-bottom: 15px;\n}\n\nlabel{\n margin-bottom: 15px;\n}\n\ninput,\ninput::-webkit-input-placeholder {\n font-size: 11px;\n padding-top: 3px;\n}\n\n.main-login{\n  background-color: #fff;\n /* shadows and rounded borders */\n border-radius: 2px;\n box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n\n}\n\n.main-center{\n  margin-top: 30px;\n  margin: 0 auto;\n  max-width: 330px;\n  padding: 40px 40px;\n\n}\n\n.login-button{\n margin-top: 5px;\n}\n\n.login-register{\n font-size: 11px;\n text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<head> \n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<!-- Website Font style -->\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\n\t\t\n\t\t<!-- Google Fonts -->\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\n\n\t\t<title>Login</title>\n\t</head>\n\t<body>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row main\">\n\t\t\t\t<div class=\"main-login main-center\">\n\t\t\t\t\t<form class=\"form-horizontal\" method=\"post\" action=\"#\">\n              <div class=\"panel-heading\">\n                  <div class=\"panel-title text-center\">\n                      <h1 class=\"title\">Login</h1>\n                      <hr>\n                    </div>\n               </div> \n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Uw e-mailadres</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"user.email\" name=\"user.email\" type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"  placeholder=\"Voer uw e-mailadres in\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Uw wachtwoord</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"user.wachtwoord\" name=\"user.wachtwoord\" nametype=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  placeholder=\"Voer uw wachtwoord in\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t<button (click)=\"logIn()\"type=\"button\" class=\"btn btn-primary btn-lg btn-block login-button\">Login</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"fout\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<strong>Verkeerde inloggegevens!</strong>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</body>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__ = __webpack_require__("../../../../../src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
        this.fout = false;
        console.log("Constructor ran...");
    }
    LoginComponent.prototype.logIn = function () {
        this.fout = this.userService.login(this.user, false);
        console.log(this.fout);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n  <a class=\"navbar-brand\" href=\"#\" routerLink=\"\">Webshop</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-nav ml-auto\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/producten\">Producten</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() == null\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() == null\" class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/registreren\">Registreren</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() != null\" class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/winkelwagen\">Winkelwagen</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() != null && auth.getActiveUser().admin == true\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/inventaris\" >Inventaris</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() != null && auth.getActiveUser().admin == true\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/klanten\" >Klanten</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"auth.getActiveUser() != null\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/producten\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(auth) {
        this.auth = auth;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        this.auth.deleteAuthorization();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/producten/producten.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n* { margin: 0; padding: 0 }\r\n\r\n\r\nbody {\r\n\tbackground-color: #f9f9f9;\r\n}\r\n\r\n\r\n.layout {\r\n\twidth: 100%; height: 100%;\r\n\tposition: relative;\r\n\tfont-family: 'Arimo', sans-serif;\r\n\tfont-size: 16px;\r\n\tline-height: 1.5em;\r\n\tfont-weight: 400;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.inner {\r\n\tmax-width: 100%;\r\n\tpadding: 0 0.5em;\r\n\tpadding-top: 0.5em;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n.grid { margin: 0 0 0 -0.5em; list-style-type: none; transition: all 0.3s }\r\n.grid:before, .grid:after { content: \" \"; display: table }\r\n.grid:after { clear: both }\r\n.grid-tile {\r\n\twidth: 100%;\r\n\tposition: relative; float: left;\r\n\tpadding: 0 0 0.5em 0.5em;\r\n\tbox-sizing: border-box;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n.item {\r\n\twidth: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n\tbackground-color: #fff;\r\n\tborder-radius: 15px;\r\n\tborder: 2px solid #eee;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.item-img {\r\n\twidth: 100%;\r\n    padding-bottom: 115%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.item-img:hover {\r\n\tcursor: -webkit-grab; cursor: -moz-grab;\r\n}\r\n\r\n.item-img:active {\r\n\tcursor: -webkit-grabbing; cursor: -moz-grabbing;\r\n}\r\n\r\n\r\n.item-pnl {\r\n\t/*position: relative;*/\r\n\twidth: 100%;\r\n}\r\n\r\n.pnl-wrapper {\r\n\twidth: 100%;\r\n\theight: 60px;\r\n\tdisplay: table;\r\n}\r\n\r\n.pnl-wrapper > div {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.pnl-description {\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tpadding-left: 0.5em;\r\n}\r\n\r\n.pnl-label {\r\n\tcolor: #424346;\r\n\tline-height: 16px;\r\n\tmax-height: 2.6em;\r\n\tfont-size: 0.75em;\r\n\toverflow: hidden;\r\n\tdisplay: block;\r\n}\r\n\r\n.pnl-price {\r\n\tline-height: 16px;\r\n\tcolor: #111;\r\n\tfont-weight: 700;\r\n\tfont-size: 0.75em;\r\n\tdisplay: block;\r\n\t/*margin-top: 0.125em;*/\r\n}\r\n\r\n.pnl-ic-wrapper {\r\n\twidth: 32px; height: 32px;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tmargin: 0 auto;\r\n\t-webkit-transform: scale(0.5);\r\n\t        transform: scale(0.5);\r\n}\r\n\r\n.pnl-ic-wrapper svg {\r\n    fill: none;\r\n    stroke-width: 2.0;\r\n    stroke-linecap: round;\r\n    stroke-miterlimit: 4;\r\n    stroke-location: outside;\r\n}\r\n\r\n.pnl-ic {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\twidth: 100%; height: 100%;\r\n}\r\n\r\n.pnl-favorites svg {\r\n    stroke: #a1a8ad;\r\n}\r\n\r\n.pnl-favorites {\r\n\twidth: 32px;\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n}\r\n\r\n.pnl-tocart svg {\r\n    stroke: #a1a8ad;\r\n}\r\n\r\n.pnl-tocart {\r\n\twidth: 32px;\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n@media screen and (min-width: 320px) {\r\n\t.pnl-wrapper { height: 70px }\r\n\t.pnl-label, .pnl-price { font-size: 1em; line-height: 20px; }\r\n\t.pnl-favorites, .pnl-tocart { width: 56px }\r\n\t.pnl-ic-wrapper { -webkit-transform: scale(0.75); transform: scale(0.75) }\r\n\t.pnl-description { padding-left: 1.0em }\r\n}\r\n\r\n\r\n@media screen and (min-width: 360px) {\r\n\t.inner { padding: 0 1.0em; padding-top: 1.0em }\r\n\t.grid { margin: 0 0 0 -1.0em }\r\n\t.grid-tile { padding: 0 0 1.0em 1.0em }\r\n\t.pnl-description { padding-left: 1.5em }\r\n\t.pnl-wrapper { height: 70px }\r\n}\r\n\r\n\r\n/* PORTRAIT MOBILE MODE\r\n */\r\n\r\n@media screen and (min-width: 480px) {\r\n\t.inner { padding: 0 0.5em; padding-top: 0.5em }\r\n\t.grid { margin: 0 0 0 -0.5em }\r\n\t.grid-tile { padding: 0 0 0.5em 0.5em }\r\n\t.grid-tile { width: 50% }\r\n\t.pnl-wrapper { height: 60px }\r\n\t.pnl-description { padding-left: 0.5em }\r\n\t.pnl-label, .pnl-price { font-size: 0.75em; line-height: 18px; }\r\n\t.pnl-ic-wrapper { -webkit-transform: scale(0.5); transform: scale(0.5) }\r\n\t.pnl-favorites, .pnl-tocart { width: 40px }\r\n}\r\n\r\n/* LANDSCAPE MOBILE MODE (~416px)\r\n */\r\n\r\n@media (max-height: 26em) {\r\n\t.pnl-wrapper { height: 48px }\r\n\t.grid-tile { width: 33.3333% }\r\n\t.pnl-label { font-size: 0.7em; line-height: 14px; }\r\n\t.pnl-price { font-size: 0.7em; line-height: 14px; }\r\n\t.pnl-favorites { position: absolute; width: 40px; height: 40px; top:0; right: 0 }\r\n\t.pnl-ic-wrapper { -webkit-transform: scale(0.5); transform: scale(0.5) }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 600px) {\r\n\t.inner { padding: 0 1.0em; padding-top: 1.0em }\r\n\t.grid { margin: 0 0 0 -1.0em }\r\n\t.grid-tile { padding: 0 0 1.0em 1.0em }\r\n\t.pnl-wrapper { height: 70px }\r\n\t.pnl-label, .pnl-price { font-size: 1em; line-height: 20px; }\r\n\t.pnl-favorites, .pnl-tocart { width: 56px }\r\n\t.pnl-ic-wrapper { -webkit-transform: scale(0.75); transform: scale(0.75) }\r\n\t.pnl-description { padding-left: 1.0em }\r\n}\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n\t.inner { padding: 0 1.5em; padding-top: 1.5em }\r\n\t.grid { margin: 0 0 0 -1.5em }\r\n\t.grid-tile { padding: 0 0 1.5em 1.5em }\r\n}\r\n\r\n\r\n@media screen and (min-width: 912px) {\r\n\t\r\n}\r\n\r\n\r\n@media screen and (min-width: 1024px) {\r\n\t.grid-tile { width: 33.3333% }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1300px) {\r\n\t.pnl-description { padding-left: 1.5em }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1440px) {\r\n\t.inner { width: 1400px; margin: 0 auto }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/producten/producten.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html><html class=''>\n  <head><script src='//production-assets.codepen.io/assets/editor/live/console_runner-079c09a0e3b9ff743e39ee2d5637b9216b3545af0de366d4b9aad9dc87e26bfd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/events_runner-73716630c22bbc8cff4bd0f07b135f00a0bdc5d14629260c3ec49e5606f98fdd.js'></script><script src='//production-assets.codepen.io/assets/editor/live/css_live_reload_init-2c0dc5167d60a5af3ee189d570b1835129687ea2a61bee3513dee3a50c115a77.js'></script><meta charset='UTF-8'><meta name=\"robots\" content=\"noindex\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico\" /><link rel=\"mask-icon\" type=\"\" href=\"//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg\" color=\"#111\" /><link rel=\"canonical\" href=\"https://codepen.io/iamevg/pen/NAzAJz?limit=all&page=30&q=shop\" />\n  <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>\n  <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css'>\n  <style class=\"cp-pen-styles\">* {\n    font-family: \"Roboto\";\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    letter-spacing: 1px;\n    box-sizing: border-box;\n  }\n  body {\n    background: #f9fafa;\n    padding: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .block {\n    margin: 20px;\n    border-radius: 4px;\n    width: 280px;\n    min-height: 300px;\n    background: #fff;\n    padding: 23px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    box-shadow: 0 2px 55px rgba(0,0,0,0.1);\n  }\n  .top {\n    border-bottom: 1px solid #e5e5e5;\n    padding-bottom: 10px;\n  }\n  .top ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .top a {\n    color: #9e9e9e;\n  }\n  .top a:hover {\n    color: #c7ccdb;\n  }\n  .converse {\n    padding: 2px 10px;\n    border-radius: 20px;\n    text-transform: uppercase;\n    font-size: 14px;\n  }\n  .middle {\n    margin-bottom: 40px;\n  }\n  .middle img {\n    width: 100%;\n  }\n  .bottom {\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .heading {\n    font-size: 17px;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    letter-spacing: 0;\n  }\n  .info {\n    font-size: 14px;\n    color: #969696;\n    margin-bottom: 10px;\n  }\n  .style {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n  .old-price {\n    color: #f00;\n    text-decoration: line-through;\n  }\n  </style></head><body>\n  <div class=\"block\" *ngFor=\"let product of producten\">\n  \n    <div class=\"top\">\n      <ul>\n        <li>\n          <a *ngIf=\"auth.getActiveUser() != null && product.besteld != true\" (click)=\"addWinkelmand(product, $event)\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"> Voeg toe aan winkelmand</i>\n          </a>\n           <p *ngIf=\"product.besteld===true\" >Product in winkelmand!</p>\n          <a *ngIf=\"auth.getActiveUser() == null\" href=\"#\" routerLink=\"/login\">Log in om te bestellen!</a>\n        </li>\n      </ul>\n    </div>\n  \n    <div class=\"middle\">\n      <img src=\"http://localhost:8080/producten/images/{{product.path}}\" alt=\"pic\" />\n    </div>\n  \n    <div class=\"bottom\">\n      <div class=\"heading\">{{product.naam}}</div>\n      <div class=\"info\">{{product.beschrijving}}</div>\n      <div class=\"price\">€{{product.prijs}}</div>\n    </div>\n  \n  </div>\n  \n  \n  </body></html>"

/***/ }),

/***/ "../../../../../src/app/components/producten/producten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__ = __webpack_require__("../../../../../src/app/services/producten/productservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_winkelwagen_winkelwagenservice_service__ = __webpack_require__("../../../../../src/app/services/winkelwagen/winkelwagenservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductenComponent = (function () {
    function ProductenComponent(productService, auth, wagen) {
        var _this = this;
        this.productService = productService;
        this.auth = auth;
        this.wagen = wagen;
        this.aantal = 1;
        this.productService.getAlleProducten().subscribe(function (producten) {
            _this.producten = producten;
        });
        this.besteldeProducten = JSON.parse(sessionStorage.getItem("activeWinkelwagen"));
    }
    ProductenComponent.prototype.ngOnInit = function () {
    };
    ProductenComponent.prototype.addWinkelmand = function (product, event) {
        //   product.besteld = true;
        if (event.srcElement.innerHTML === ' Voeg toe aan winkelmand') {
            console.log("werkt");
            event.srcElement.innerHTML = "Product in winkelmand!";
            event.srcElement.innerHTML.d;
        }
        if (this.besteldeProducten != null) {
            for (var i = 0; i < this.besteldeProducten.length; i++) {
                this.wagen.productenInWinkelwagen.push(this.besteldeProducten[i]);
            }
        }
        this.wagen.productenInWinkelwagen.push(product);
        sessionStorage.setItem('activeWinkelwagen', JSON.stringify(this.wagen.productenInWinkelwagen));
    };
    return ProductenComponent;
}());
ProductenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-producten',
        template: __webpack_require__("../../../../../src/app/components/producten/producten.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/producten/producten.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__["a" /* ProductserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_producten_productservice_service__["a" /* ProductserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_authorization_service__["a" /* AuthorizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_winkelwagen_winkelwagenservice_service__["a" /* WinkelwagenserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_winkelwagen_winkelwagenservice_service__["a" /* WinkelwagenserviceService */]) === "function" && _c || Object])
], ProductenComponent);

var _a, _b, _c;
//# sourceMappingURL=producten.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/registreren/registreren.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n body, html{\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    font-family: 'Oxygen', sans-serif;\r\n}\r\n\r\n.main{\r\n    margin-top: 30px;\r\n}\r\n\r\nh1.title { \r\n   font-size: 40px;\r\n   font-weight: bold; \r\n   margin: 0 auto;\r\n}\r\n\r\nhr{\r\n   width: 10%;\r\n   color: #fff;\r\n}\r\n\r\n.form-group{\r\n   margin-bottom: 15px;\r\n}\r\n\r\nlabel{\r\n   margin-bottom: 15px;\r\n}\r\n\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n   font-size: 11px;\r\n   padding-top: 3px;\r\n}\r\n\r\n.main-login{\r\n    background-color: #fff;\r\n   /* shadows and rounded borders */\r\n   border-radius: 2px;\r\n   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n\r\n.main-center{\r\n    margin-top: 30px;\r\n    margin: 0 auto;\r\n    max-width: 330px;\r\n    padding: 40px 40px;\r\n\r\n}\r\n\r\n.login-button{\r\n   margin-top: 5px;\r\n}\r\n\r\n.login-register{\r\n   font-size: 11px;\r\n   text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registreren/registreren.component.html":
/***/ (function(module, exports) {

module.exports = "<head> \n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<!-- Website Font style -->\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\n\t\t<title>Registreren</title>\n\t</head>\n\t<body>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row main\">\n\t\t\t\t<div class=\"main-login main-center\">\n\t\t\t\t\t<form [formGroup]=\"form\" class=\"form-horizontal\" method=\"post\" action=\"#\">\n              <div class=\"panel-heading\">\n                  <div class=\"panel-title text-center\">\n                      <h1 class=\"title\">Registreren</h1>\n                      <hr>\n                    </div>\n\t\t\t\t   </div> \n\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Uw naam</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.voornaam\" name=\"voornaam\" id=\"name\"  placeholder=\"Voer uw voornaam in\" formControlName=\"voornaam\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\" class=\"cols-sm-2 control-label\">Uw achternaam</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.achternaam\" name=\"achternaam\" id=\"email\"  placeholder=\"Voer uw achternaam in\" formControlName=\"achternaam\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Uw e-mailadres</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\"  placeholder=\"Voer uw e-mailadres in\" formControlName=\"email\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Uw wachtwoord</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  placeholder=\"Voer uw wachtwoord in\" formControlName=\"wachtwoord\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Bevestig uw wachtwoord</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.wachtwoord\" name=\"wachtwoord\" id=\"confirm\"  placeholder=\"Bevestig uw wachtwoord\" formControlName=\"bwachtwoord\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t<button type=\"submit\" (click)=\"registreer()\"style=\"width: 100%;\" [disabled]=\"form.invalid\" class=\"btn btn-success\">Registreer</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\t<script type=\"text/javascript\" src=\"assets/js/bootstrap.js\"></script>\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/registreren/registreren.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrerenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrerenComponent = (function () {
    function RegistrerenComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
        this.createForm();
    }
    RegistrerenComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            voornaam: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            achternaam: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            wachtwoord: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            bwachtwoord: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    RegistrerenComponent.prototype.registreer = function () {
        this.userService.registreer(this.user);
    };
    return RegistrerenComponent;
}());
RegistrerenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registreren',
        template: __webpack_require__("../../../../../src/app/components/registreren/registreren.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/registreren/registreren.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], RegistrerenComponent);

var _a, _b;
//# sourceMappingURL=registreren.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/toevoegen/toevoegen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toevoegen/toevoegen.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Bob\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"avatar\">Avatar</label>\n    <input type=\"file\" id=\"plaatje\" (change)=\"onFileChange($event)\" #fileInput>\n    <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n</form> -->\n<h1>Product toevoegen</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlInput1\">Product naam</label>\n    <input [(ngModel)]=\"naam\"type=\"email\" class=\"form-control\" id=\"productnaam\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"beschrijving\">Product beschrijving</label>\n    <textarea [(ngModel)]=\"beschrijving\"class=\"form-control\" id=\"beschrijving\" rows=\"3\" formControlName=\"beschrijving\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"prijs\">Prijs</label>\n    <input [(ngModel)]=\"prijs\" type=\"number\" class=\"form-control\" id=\"prijs\" formControlName=\"prijs\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"aantal\">Aantal</label>\n    <input [(ngModel)]=\"aantal\" type=\"number\" class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"aantal\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"plaatje\">Productfoto</label>\n    <input type=\"file\" id=\"avatar\" class=\"form-control-file\" (change)=\"onFileChange($event)\" #fileInput >\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n</form> "

/***/ }),

/***/ "../../../../../src/app/components/toevoegen/toevoegen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToevoegenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producten_productservice_service__ = __webpack_require__("../../../../../src/app/services/producten/productservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToevoegenComponent = (function () {
    function ToevoegenComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.loading = false;
        this.image = {
            base64: null,
            naam: null
        };
        this.createForm();
    }
    ToevoegenComponent.prototype.ngOnInit = function () {
    };
    ToevoegenComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            beschrijving: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            prijs: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            aantal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            avatar: null
        });
    };
    ToevoegenComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            this.path = file.name;
            reader.onload = function () {
                _this.image.base64 = reader.result.split(',')[1];
                // this.form.get('avatar').setValue({
                //   filename: file.name,
                //   filetype: file.type,
                //   value: reader.result.split(',')[1]
                // })
            };
        }
    };
    ToevoegenComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.form.value;
        this.loading = true;
        setTimeout(function () {
            _this.service.uploadProduct(new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](_this.naam, _this.beschrijving, _this.prijs, _this.aantal, _this.path));
            _this.image.naam = _this.path;
            console.log(_this.image.base64);
            _this.service.uploadImage(_this.image);
            alert('Product toegevoegd!');
            _this.form.reset();
        }, 1000);
    };
    ToevoegenComponent.prototype.clearFile = function () {
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    return ToevoegenComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ToevoegenComponent.prototype, "fileInput", void 0);
ToevoegenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-toevoegen',
        template: __webpack_require__("../../../../../src/app/components/toevoegen/toevoegen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/toevoegen/toevoegen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_producten_productservice_service__["a" /* ProductserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producten_productservice_service__["a" /* ProductserviceService */]) === "function" && _c || Object])
], ToevoegenComponent);

var _a, _b, _c;
//# sourceMappingURL=toevoegen.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/winkelwagen/winkelwagen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\r\n    vertical-align: middle;\r\n}\r\n\r\n.card-img-top {\r\n    width: 50%;\r\n    height: 50%;\r\n    border-top-left-radius: calc(.25rem - 1px);\r\n    border-top-right-radius: calc(.25rem - 1px);\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    table#cart tbody td .form-control{\r\n\t\twidth:20%;\r\n\t\tdisplay: inline !important;\r\n\t}\r\n\t.actions .btn{\r\n\t\twidth:36%;\r\n\t\tmargin:1.5em 0;\r\n\t}\r\n\t\r\n\t.actions .btn-info{\r\n\t\tfloat:left;\r\n\t}\r\n\t.actions .btn-danger{\r\n\t\tfloat:right;\r\n\t}\r\n\t\r\n\ttable#cart thead { display: none; }\r\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\r\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\r\n\ttable#cart tbody td:before {\r\n\t\tcontent: attr(data-th); font-weight: bold;\r\n\t\tdisplay: inline-block; width: 8rem;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n\ttable#cart tfoot td{display:block; }\r\n\ttable#cart tfoot td .btn{display:block;}\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/winkelwagen/winkelwagen.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"done\" class=\"alert alert-success\">\n\t<strong>Klaar!</strong> De producten zijn besteld!\n  </div>\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div *ngIf=\"!done\" class=\"container\">\n\t<table id=\"cart\" class=\"table table-hover table-condensed\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t<th style=\"width:10%\">Prijs</th>\n\t\t\t\t<th style=\"width:8%\">Aantal</th>\n\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Totaal</th>\n\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of items\">\n\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"http://localhost:8080/producten/images/{{item.product.path}}\" alt=\"Card image cap\">\n\t\t\t\t\t\t<div class=\"col-sm-10\" style=\"padding-left:50px;\"S>\n\t\t\t\t\t\t\t<h4 class=\"nomargin\">{{item.product.naam}}</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td data-th=\"Price\">€{{item.product.prijs}}</td>\n\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t{{item.aantal}}\n\t\t\t\t</td>\n\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">{{item.product.prijs * item.aantal}}</td>\n\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot>\n\t\t\t<tr>\n\t\t\t\t<td><p routerLink=\"/producten\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Verder winkelen</p></td>\n\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Totaal: €{{totaal}}</strong></td>\n\t\t\t\t<td><a class=\"btn btn-success btn-block\" (click)=\"checkOut()\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/winkelwagen/winkelwagen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinkelwagenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_winkelwagen_winkelwagenservice_service__ = __webpack_require__("../../../../../src/app/services/winkelwagen/winkelwagenservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_winkelwagen__ = __webpack_require__("../../../../../src/app/models/winkelwagen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cart_item__ = __webpack_require__("../../../../../src/app/models/cart-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producten_productservice_service__ = __webpack_require__("../../../../../src/app/services/producten/productservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WinkelwagenComponent = (function () {
    function WinkelwagenComponent(wagen, service) {
        this.wagen = wagen;
        this.service = service;
        this.items = [];
        this.producten = [];
        this.count = 1;
        this.totaal = 0;
        this.done = false;
        this.winkelWagen = new __WEBPACK_IMPORTED_MODULE_2__models_winkelwagen__["a" /* Winkelwagen */];
    }
    WinkelwagenComponent.prototype.ngOnInit = function () {
        this.producten = JSON.parse(sessionStorage.getItem("activeWinkelwagen"));
        if (this.producten != null) {
            this.producten.sort();
            // console.log(this.producten)
            for (var i = 0; i < this.producten.length; i++) {
                if (!this.producten[i] == this.producten[i + 1]) {
                    this.count += 1;
                }
                else {
                    this.items.push(new __WEBPACK_IMPORTED_MODULE_3__models_cart_item__["a" /* CartItem */](this.producten[i], this.count));
                    this.count = 1;
                }
            }
            for (var i = 0; i < this.items.length; i++) {
                this.totaal += this.items[i].product.prijs * this.items[i].aantal;
            }
        }
    };
    WinkelwagenComponent.prototype.checkOut = function () {
        this.winkelWagen.producten = this.producten;
        console.log(this.winkelWagen.producten[0]);
        this.service.checkOut(this.winkelWagen);
        sessionStorage.removeItem("activeWinkelwagen");
        this.wagen.productenInWinkelwagen = [];
        this.items = null;
        this.done = true;
    };
    return WinkelwagenComponent;
}());
WinkelwagenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-winkelwagen',
        template: __webpack_require__("../../../../../src/app/components/winkelwagen/winkelwagen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/winkelwagen/winkelwagen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_winkelwagen_winkelwagenservice_service__["a" /* WinkelwagenserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_winkelwagen_winkelwagenservice_service__["a" /* WinkelwagenserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_producten_productservice_service__["a" /* ProductserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_producten_productservice_service__["a" /* ProductserviceService */]) === "function" && _b || Object])
], WinkelwagenComponent);

var _a, _b;
//# sourceMappingURL=winkelwagen.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/guard-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardAdminGuard = (function () {
    function GuardAdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    GuardAdminGuard.prototype.canActivate = function () {
        console.log("guard");
        if (this.auth.getActiveUser() != null && this.auth.getActiveUser().admin == true) {
            return true;
        }
        else {
            alert("Niet bevoegd!");
            this.router.navigate(['/producten']);
            return false;
        }
    };
    return GuardAdminGuard;
}());
GuardAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], GuardAdminGuard);

var _a, _b;
//# sourceMappingURL=guard-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/inlog.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlogGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InlogGuard = (function () {
    function InlogGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    InlogGuard.prototype.canActivate = function () {
        if (this.auth.getAuthenticator() != null && this.auth.getActiveUser() != null) {
            return true;
        }
        else {
            alert("Niet ingelogd!");
            this.router.navigate(['/login']);
            return false;
        }
    };
    return InlogGuard;
}());
InlogGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], InlogGuard);

var _a, _b;
//# sourceMappingURL=inlog.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem(product, aantal) {
        if (aantal === void 0) { aantal = 0; }
        this.product = product;
        this.aantal = aantal;
    }
    return CartItem;
}());

//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(naam, beschrijving, prijs, aantal, path) {
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.prijs = prijs;
        this.aantal = aantal;
        this.path = path;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, voornaam, achternaam, email, wachtwoord, admin) {
        this.id = id;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.admin = admin;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/models/winkelwagen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Winkelwagen; });
var Winkelwagen = (function () {
    function Winkelwagen(producten) {
        if (producten === void 0) { producten = new Array(); }
        this.producten = producten;
    }
    return Winkelwagen;
}());

//# sourceMappingURL=winkelwagen.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/zoek-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoekFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZoekFilterPipe = (function () {
    function ZoekFilterPipe() {
    }
    ZoekFilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].toLowerCase().includes(value.toLowerCase()); });
    };
    return ZoekFilterPipe;
}());
ZoekFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'zoekFilter'
    })
], ZoekFilterPipe);

//# sourceMappingURL=zoek-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ApiService.prototype.createQueryString = function (queryParameters) {
        var queryString = '';
        if (typeof queryParameters === 'object') {
            for (var key in queryParameters) {
                var value = queryParameters[key];
                var prefix = queryString.length === 0 ? '?' : '&';
                queryString += "" + prefix + key + "=" + value;
            }
        }
        return queryString;
    };
    ApiService.prototype.createRequestHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (this.authService.hasAuthorization()) {
            headers = headers.set('Authorization', this.authService.createAuthorizationString());
        }
        return headers;
    };
    ApiService.prototype.registreer = function (data) {
        return this.http.post('http://localhost:8080/user/registreer', data);
    };
    ApiService.prototype.uploadProduct = function (data) {
        return this.http.post('http://localhost:8080/producten/toevoegen', data);
    };
    ApiService.prototype.createURI = function (path, queryParameters) {
        var queryString = this.createQueryString(queryParameters);
        return "/" + path + queryString;
    };
    ApiService.prototype.getLogin = function (path, queryParameters) {
        var uri = this.createURI(path, queryParameters);
        var headers = this.createRequestHeaders();
        return this.http.get('http://localhost:8080/user/login', { headers: headers });
    };
    ApiService.prototype.getProducten = function () {
        return this.http.get('http://localhost:8080/producten/all');
    };
    ApiService.prototype.uploadImage = function (image) {
        return this.http.post('http://localhost:8080/producten/uploadimage', image).subscribe();
    };
    ApiService.prototype.getUsers = function (queryParameters) {
        var headers = this.createRequestHeaders();
        return this.http.get('http://localhost:8080/user/getall', { headers: headers });
    };
    ApiService.prototype.verwijder = function (product) {
        return this.http.post('http://localhost:8080/producten/verwijder', product).subscribe();
    };
    ApiService.prototype.checkOut = function (items) {
        return this.http.post('http://localhost:8080/producten/checkout', items).subscribe();
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_authorization_service__["a" /* AuthorizationService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/producten/productservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("../../../../../src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductserviceService = (function () {
    function ProductserviceService(api) {
        this.api = api;
    }
    ProductserviceService.prototype.getAlleProducten = function () {
        return this.api.getProducten();
    };
    ProductserviceService.prototype.uploadImage = function (image) {
        return this.api.uploadImage(image);
    };
    ProductserviceService.prototype.uploadProduct = function (data) {
        return this.api.uploadProduct(data).subscribe(function (data) {
        }, function (error) {
            alert("Er is iets mis gegegaan!");
        });
    };
    ProductserviceService.prototype.verwijder = function (product) {
        this.api.verwijder(product);
    };
    ProductserviceService.prototype.checkOut = function (items) {
        this.api.checkOut(items);
    };
    return ProductserviceService;
}());
ProductserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ProductserviceService);

var _a;
//# sourceMappingURL=productservice.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
        console.log("constructor ran-->");
    }
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorizationService = (function () {
    function AuthorizationService() {
        this.login = null;
        this.wachtwoord = null;
        this.authenticator = null;
        this.authorized$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    AuthorizationService.prototype.getActiveUser = function () {
        this.activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
        //  console.log(this.activeUser)
        return this.activeUser;
    };
    AuthorizationService.prototype.hasAuthorization = function () {
        return this.login !== null && this.wachtwoord !== null;
    };
    AuthorizationService.prototype.createAuthorizationString = function () {
        return 'Basic ' + btoa(this.login + ':' + this.wachtwoord);
    };
    AuthorizationService.prototype.setAuthorization = function (login, wachtwoord) {
        this.login = login;
        this.wachtwoord = wachtwoord;
    };
    AuthorizationService.prototype.storeAuthorization = function (authenticator, local) {
        this.authenticator = authenticator;
        var authorization = {
            login: this.login,
            password: this.wachtwoord,
            authenticator: this.authenticator
        };
        var authorizationString = JSON.stringify(authorization);
        var storage = local ? localStorage : sessionStorage;
        storage.setItem('authorization', authorizationString);
        this.authorized$.next(true);
    };
    AuthorizationService.prototype.deleteAuthorization = function () {
        this.login = null;
        this.wachtwoord = null;
        this.authenticator = null;
        sessionStorage.clear();
        this.authorized$.next(false);
    };
    AuthorizationService.prototype.getAuthenticator = function () {
        return this.authenticator;
    };
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthorizationService);

//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("../../../../../src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_authorization_service__ = __webpack_require__("../../../../../src/app/services/user/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(api, authService, router) {
        this.api = api;
        this.authService = authService;
        this.router = router;
    }
    UserService.prototype.registreer = function (user) {
        var data = {
            voornaam: user.voornaam,
            achternaam: user.achternaam,
            email: user.email,
            wachtwoord: user.wachtwoord
        };
        this.api.registreer(data).subscribe(function (data) {
            alert("Gelukt");
        }, function (error) {
            alert("Mislukt");
        });
    };
    UserService.prototype.login = function (user, remember) {
        var _this = this;
        this.authService.setAuthorization(user.email, user.wachtwoord);
        this.api.getLogin('user/login').subscribe(function (authenticator) {
            _this.authService.storeAuthorization(authenticator, remember);
            sessionStorage.setItem('activeUser', JSON.stringify(authenticator));
            _this.goHome();
            return false;
        }, function (error) {
            return true;
        });
        return true;
    };
    UserService.prototype.getAll = function () {
        return this.api.getUsers();
    };
    UserService.prototype.goHome = function () {
        this.router.navigate(['/producten']);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_authorization_service__["a" /* AuthorizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/winkelwagen/winkelwagenservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinkelwagenserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WinkelwagenserviceService = (function () {
    function WinkelwagenserviceService() {
        this.productenInWinkelwagen = [];
        this.productenInWinkelwagen.sort();
    }
    return WinkelwagenserviceService;
}());
WinkelwagenserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WinkelwagenserviceService);

//# sourceMappingURL=winkelwagenservice.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map