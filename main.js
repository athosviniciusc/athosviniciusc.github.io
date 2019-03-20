(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  padding: 20px;\r\n  background: black;\r\n  text-align: \"center\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IFwiY2VudGVyXCI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron text-center\">\n  <h2> Bem vindo ao seu perfil {{nome}}!</h2> \n  <img width=\"150\" class=\"img-circle\" src=\"/assets/imagem.jpg\">\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h2>Sobre</h2>\n      <p><strong> Nome:</strong> {{nome}} </p>\n      <p><strong>Data de nascimento:</strong> {{datadenascimento}} </p>\n      <p><strong>Sexo:</strong> {{sexo}}</p>\n      <p><strong>Email:</strong> {{email}}</p>\n      <p><strong>Profissão:</strong> {{profissao}}</p>\n      <p><strong>Estado Civil:</strong> {{estadocivil}}</p>\n      <p><strong>Cidade:</strong> {{cidade}}</p>\n      <p><strong>Estado:</strong> {{estado}}</p>\n      <p><strong>Descrição:</strong> {{biografia}}</p>\n      <p><strong>Interesses;</strong></p>\n      <div>\n        <ul>          \n          <li *ngFor=\"let interesses of interesseslista\"> \n            <p> {{interesses.inte1}}</p>\n            <p> {{interesses.inte2}}</p>\n            <p> {{interesses.inte3}}</p>\n            <p> {{interesses.inte4}}</p>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <h2>Faculdade</h2>\n      <p><strong>Sobre;</strong></p>\n        <div>\n          <ul>          \n            <li *ngFor=\"let facul of informacaouniversidade\">\n              <p>{{facul.Universidade}}</p>\n              <p>{{facul.Curso}}</p>\n            </li>\n          </ul>\n        </div>\n      <p><strong>Disciplinas já cursadas;</strong></p>\n        <div>\n          <ul>          \n            <li *ngFor=\"let facul of listadedisciplinas\">\n              <p>{{facul.Periodo}}</p>\n              <p>{{facul.Materias}}</p>\n            </li>\n          </ul>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <h2>Informações profissionais </h2>  \n      <p><strong>Sobre;</strong></p>      \n        <div>\n          <ul>          \n            <li *ngFor=\"let profissao of infoprofissionais\">\n              <p>{{profissao.Trabalho}}</p>\n              <p>{{profissao.Cargo}}</p>\n              <p>{{profissao.Func}}</p>\n            </li>\n          </ul>\n        </div>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\">\n  <p align=\"center\"> &copy; Athos Vinicius </p> \n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.nome = 'Athos Vinicius ';
        this.datadenascimento = '08/09/1997';
        this.sexo = 'Masculino';
        this.email = 'athos_47@hotmail.com';
        this.profissao = 'Autônomo';
        this.estadocivil = 'Solteiro';
        this.biografia = 'Rapaz determinado, onde quer provar com todas as suas forças que ele e capaz de fazer e ser o diferencial. Provar a todos que ele é um filho capaz de onrar os seus pais e os seus compromissos.';
        this.cidade = 'Palmas';
        this.estado = 'Tocantins';
        this.informacaouniversidade = [
            { Universidade: "Universidade: CEULP/ULBRA" },
            { Curso: "Curso: Sistema de informações" },
        ];
        this.listadedisciplinas = [
            { Periodo: "1 Período", Materias: " Fundamentos da matemática, Intrudoção da computação, AP1" },
            { Periodo: "2 Período", Materias: " Ap2, Logica de predicados, Sociedade e contemporaneidade, Arquitetura 1, Cultura religiosa" },
            { Periodo: "3 Período", Materias: " BD1, Engenheira 1, LPOO, ED1, Comunicação Expressão" },
            { Periodo: "4 Período", Materias: " BD2, Engenheira 2, Instrumentalização, LPC, Paradigmas de linguagens de programação" },
            { Periodo: "5 Período", Materias: " LPWEB, Redes de computadores 1, Analise Organizacional, ED2, Empreendedorismo, Modelagem de sistemas de informações" }
        ];
        this.infoprofissionais = [
            { Trabalho: "Orgão: Tribunal de Justiça" },
            { Cargo: "Cargo: Tecnico em informática" },
            { Func: "Função: Responsável pela manuntenções de todos os computadores do Forúm da Comarca de Palmas" }
        ];
        this.interesseslista = [
            { inte1: "Musicas" },
            { inte2: "Filme" },
            { inte3: "Volei" },
            { inte4: "Mulheres" },
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rodape/rodape.component */ "./src/app/rodape/rodape.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_5__["RodapeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/rodape/rodape.component.css":
/*!*********************************************!*\
  !*** ./src/app/rodape/rodape.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvZGFwZS9yb2RhcGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rodape/rodape.component.html":
/*!**********************************************!*\
  !*** ./src/app/rodape/rodape.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rodape works!\n</p>\n"

/***/ }),

/***/ "./src/app/rodape/rodape.component.ts":
/*!********************************************!*\
  !*** ./src/app/rodape/rodape.component.ts ***!
  \********************************************/
/*! exports provided: RodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodapeComponent", function() { return RodapeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RodapeComponent = /** @class */ (function () {
    function RodapeComponent() {
    }
    RodapeComponent.prototype.ngOnInit = function () {
    };
    RodapeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rodape',
            template: __webpack_require__(/*! ./rodape.component.html */ "./src/app/rodape/rodape.component.html"),
            styles: [__webpack_require__(/*! ./rodape.component.css */ "./src/app/rodape/rodape.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RodapeComponent);
    return RodapeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Athos Vinicius\perfilusuario\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map