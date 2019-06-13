webpackJsonp([3],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/abertura-requerimento/abertura-requerimento.module": [
		285,
		2
	],
	"../pages/inicial/inicial.module": [
		286,
		1
	],
	"../pages/teste/teste.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoRequerimentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TipoRequerimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TipoRequerimentoProvider = (function () {
    function TipoRequerimentoProvider(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //private tipoRequerimento:String;
        this.urlTipoRequerimento = "http://localhost:8080/DS1_Femass/rest/requerimento/tiposRequerimento";
        console.log('Hello TipoRequerimentoProvider Provider');
    }
    TipoRequerimentoProvider.prototype.getTipoRequerimento = function () {
        return this.http.get(this.urlTipoRequerimento);
    };
    TipoRequerimentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], TipoRequerimentoProvider);
    return TipoRequerimentoProvider;
}());

//# sourceMappingURL=tipoRequerimentoProvider.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicial_inicial__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToInicialPage = function () {
        if ((this.matricula == null) || (this.password == "")) {
            alert("Por favor preencha matricula e senha");
        }
        else
            (this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicial_inicial__["a" /* InicialPage */], {
                userLogin: this.matricula,
                senhaLogin: this.password,
            }));
    };
    HomePage.prototype.testandoAlert = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/home/home.html"*/`<ion-content padding>\n  <div margin-right>\n    <ion-icon name="custom-mobile"></ion-icon>\n  </div>\n\n  <div text-center margin-top>\n    <ion-item>\n      <ion-label stacked>Matrícula</ion-label>\n      <ion-input type="matricula" placeholder="Mátricula" [(ngModel)]="matricula"></ion-input>\n      <!--[(ngModel)] - usado para receber o valor na variavel mmatricula-->\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input type="password" placeholder="Senha" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </div>\n\n  <div text-center margin-top>\n      <ion-list>\n\n          <ion-item>\n            <ion-label stacked>Continuar logado</ion-label>\n            <ion-checkbox [(ngModel)]="Logado"></ion-checkbox>\n          </ion-item>\n        \n        </ion-list>\n    <button ion-button margin-right (click)="goToInicialPage()">\n      ACESSAR\n    </button>\n  </div>\n\n</ion-content>`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginProvider_loginProvider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicial_inicial__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abertura_requerimento_abertura_requerimento__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestePage = (function () {
    function TestePage(navCtrl, navParams, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginProvider = loginProvider;
        this.cpfUser = new Array();
        this.cursoUser = new Array();
        this.cepUser = new Array();
    }
    TestePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loginProvider.getLoginUser().subscribe(function (data) {
            var response = data;
            _this.cpfUser = response.cpf;
            _this.cursoUser = response.curso;
            _this.cepUser = response.enderecoCep;
            //console.log(response);
        }, function (error) {
            alert("Usuario ou senha incorreto!");
            //this.navCtrl.push(HomePage);
        });
    };
    TestePage.prototype.goToInicialPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicial_inicial__["a" /* InicialPage */], {});
    };
    TestePage.prototype.goToAberturaRequerimentoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__abertura_requerimento_abertura_requerimento__["a" /* AberturaRequerimentoPage */], {});
    };
    TestePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teste',template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/teste/teste.html"*/`<!--\n  Generated template for the TestePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Teste</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-item>\n      <h2 class="teste_CPF">CPF: {{cpfUser}}</h2>\n      <h2 class="teste_Curso">Curso: {{cursoUser}}</h2>\n      <h2 class="teste_CEP">Cep: {{cepUser}}</h2>\n    </ion-item>\n\n  </ion-card>\n\n  <!---->\n  <button ion-button margin-right (click)="goToInicialPage()">\n    Pagina Inicial\n  </button>\n\n  <button ion-button margin-right (click)="goToAberturaRequerimentoPage()">\n    Abertura de Requerimento\n  </button>\n\n</ion-content>`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/teste/teste.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_loginProvider_loginProvider__["a" /* LoginProvider */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loginProvider_loginProvider__["a" /* LoginProvider */]])
    ], TestePage);
    return TestePage;
}());

//# sourceMappingURL=teste.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_teste_teste__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_loginProvider_loginProvider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_abertura_requerimento_abertura_requerimento__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inicial_inicial__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_tipoRequerimentoProvider_tipoRequerimentoProvider__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_requerimentoProvider_requerimentoProvider__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_teste_teste__["a" /* TestePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abertura_requerimento_abertura_requerimento__["a" /* AberturaRequerimentoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicial_inicial__["a" /* InicialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/abertura-requerimento/abertura-requerimento.module#AberturaRequerimentoPageModule', name: 'AberturaRequerimentoPage', segment: 'abertura-requerimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicial/inicial.module#InicialPageModule', name: 'InicialPage', segment: 'inicial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teste/teste.module#TestePageModule', name: 'TestePage', segment: 'teste', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_teste_teste__["a" /* TestePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abertura_requerimento_abertura_requerimento__["a" /* AberturaRequerimentoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicial_inicial__["a" /* InicialPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_loginProvider_loginProvider__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_tipoRequerimentoProvider_tipoRequerimentoProvider__["a" /* TipoRequerimentoProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_requerimentoProvider_requerimentoProvider__["a" /* RequerimentoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicial_inicial__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_abertura_requerimento_abertura_requerimento__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_userConfigProvider_userConfigProvider__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, userConfigProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userConfigProvider = userConfigProvider;
        //private matricula: number;
        //private password: string;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]; //altera a pagina inicial
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Requerimentos', component: __WEBPACK_IMPORTED_MODULE_5__pages_inicial_inicial__["a" /* InicialPage */] },
            { title: 'Abertura de Requerimento', component: __WEBPACK_IMPORTED_MODULE_6__pages_abertura_requerimento_abertura_requerimento__["a" /* AberturaRequerimentoPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            /*
                  let config = this.userConfigProvider.getConfigData();
                  if(config==null){
                    console.log("entrou no if");
                    this.rootPage = HomePage;
                    this.userConfigProvider.setConfigData(false);
                  }else{
                    console.log("entrou no else");
                    this.rootPage = InicialPage, {
                      userLogin: this.matricula,
                      senhaLogin: this.password,
                    };
                  }*/
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- Htlml ta janela de menu-->\n      <ion-title>Teste lalala</ion-title>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/app/app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__providers_userConfigProvider_userConfigProvider__["a" /* UserConfigProvider */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_userConfigProvider_userConfigProvider__["a" /* UserConfigProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var config_key_name = "config";
var UserConfigProvider = (function () {
    function UserConfigProvider() {
        this.config = {
            logado: false,
            nome: "",
            matricula: "",
            password: "",
            curso: "",
        };
    }
    //recuperar os dados do localstorage
    UserConfigProvider.prototype.getConfigData = function () {
        return localStorage.getItem(config_key_name);
    };
    //salvar os dados no localstorage
    UserConfigProvider.prototype.setConfigData = function (logado, nome, matricula, password, curso) {
        var config = {
            logado: false,
            nome: "",
            matricula: "",
            password: "",
            curso: "",
        };
        if (logado) {
            config.logado = logado;
        }
        if (nome) {
            config.nome = nome;
        }
        if (matricula) {
            config.matricula = matricula;
        }
        if (password) {
            config.password = password;
        }
        if (curso) {
            config.curso = curso;
        }
        localStorage.setItem(config_key_name, JSON.stringify(config));
    };
    UserConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserConfigProvider);
    return UserConfigProvider;
}());

//# sourceMappingURL=userConfigProvider.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RequerimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RequerimentoProvider = (function () {
    function RequerimentoProvider(http) {
        this.http = http;
        console.log('Hello RequerimentoProvider Provider');
    }
    RequerimentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RequerimentoProvider);
    return RequerimentoProvider;
}());

//# sourceMappingURL=requerimentoProvider.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abertura_requerimento_abertura_requerimento__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loginProvider_loginProvider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tipoRequerimentoProvider_tipoRequerimentoProvider__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicialPage = (function () {
    //TipoRequerimentoProvider: any;
    function InicialPage(navCtrl, navParams, tipoRequerimentoProvider, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tipoRequerimentoProvider = tipoRequerimentoProvider;
        this.loginProvider = loginProvider;
        this.tipoReque = new Array();
        this.nomeUser = new Array();
    }
    InicialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicialPage');
        this.loginProvider.getLoginUser().subscribe(function (data) {
            //console.log("nem sei que erro eh esse");
            var response = data;
            _this.nomeUser = response.nome;
            console.log('Nome do infeliz: ' + _this.nomeUser);
        }, function (error) {
            alert("Erro no loginProvider - InicialTs");
        });
        this.tipoRequerimentoProvider.getTipoRequerimento().subscribe(function (data) {
            var response = data;
            _this.tipoReque = response[0].nome; //vai ser necessario uma estrutura de repetição....
            console.log('Tipo de requerimento[0] - ' + _this.tipoReque);
        }, function (error) {
            alert("Erro no tipoRequerimentoProvider - InicialTs");
        });
    };
    InicialPage.prototype.goToAberturaRequerimentoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__abertura_requerimento_abertura_requerimento__["a" /* AberturaRequerimentoPage */], {});
    };
    InicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicial',template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/inicial/inicial.html"*/`<!--\n  Generated template for the InicialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <!--Cria o botão de menu na pagina inicial, paginas do menu são adicionadas em app.components.ts -> this.page-->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Requerimentos:</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col>Protocolo</ion-col>\n      <ion-col>Titulo</ion-col>\n      <ion-col>Status</ion-col>\n    </ion-row>\n    <!--<div *ngFor="let item of lista">\n          <ion-row>\n            <ion-col>{{ item.descricao }}</ion-col>\n            <ion-col>{{ item.qtd_valor }}</ion-col>\n            <ion-col>{{ item.total }}</ion-col>\n          </ion-row>\n        </div>-->\n  </ion-grid>\n\n  <button ion-button margin-left (click)="goToAberturaRequerimentoPage()">\n    Vizualizar\n  </button>\n\n  <button ion-button margin-left (click)="goToAberturaRequerimentoPage()">\n    Novo\n  </button>\n\n</ion-content>`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/inicial/inicial.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_loginProvider_loginProvider__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_4__providers_tipoRequerimentoProvider_tipoRequerimentoProvider__["a" /* TipoRequerimentoProvider */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tipoRequerimentoProvider_tipoRequerimentoProvider__["a" /* TipoRequerimentoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loginProvider_loginProvider__["a" /* LoginProvider */]])
    ], InicialPage);
    return InicialPage;
}());

//# sourceMappingURL=inicial.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AberturaRequerimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicial_inicial__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AberturaRequerimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AberturaRequerimentoPage = (function () {
    function AberturaRequerimentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AberturaRequerimentoPage_1 = AberturaRequerimentoPage;
    AberturaRequerimentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AberturaRequerimentoPage');
    };
    AberturaRequerimentoPage.prototype.goToAberturaRequerimentoPage = function () {
        this.navCtrl.push(AberturaRequerimentoPage_1, {});
    };
    AberturaRequerimentoPage.prototype.goToInicialPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicial_inicial__["a" /* InicialPage */], {});
    };
    AberturaRequerimentoPage = AberturaRequerimentoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abertura-requerimento',template:/*ion-inline-start:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/abertura-requerimento/abertura-requerimento.html"*/`<!--\n  Generated template for the AberturaRequerimentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Abertura de Requerimento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <!--criar combobox: https://ionicframework.com/docs/v3/api/components/select/Select/-->\n    <ion-item>\n      <ion-label>Tipo Requerimento</ion-label>\n      <!--Necessario fazer puxar os dados do banco, verificar como fazer webservice para receber os dados-->\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n      <ion-label stacked>Documentos Necessários:</ion-label>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label stacked>Descrição:</ion-label>\n      </ion-item>\n\n  <ion-content>\n\n    <button ion-button margin-right navPop>Cancelar</button>\n\n  </ion-content>\n  <!--\n    \n        <button ion-button margin-left (click)> \n          Salvar\n        </button>-->\n\n</ion-content>`/*ion-inline-end:"/home/gabriel/Documentos/Workspaces/Ionic/DS2/src/pages/abertura-requerimento/abertura-requerimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AberturaRequerimentoPage);
    return AberturaRequerimentoPage;
    var AberturaRequerimentoPage_1;
}());

//# sourceMappingURL=abertura-requerimento.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = (function () {
    function LoginProvider(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.urlLogin = "http://200.159.247.135:8083/WebAcademico/rest/usuario/buscarPorLoginSenha/";
        console.log('Hello LoginProvider Provider');
        var recebeValorUser = navParams.get('userLogin'); /* "recebeValorUser" é uma variavel local da função,
    usada para receber o Login da variavel "userLogin", essa variavel é enviada pelo home.ts */
        var recebeValorUserSenha = navParams.get('senhaLogin');
        this.userMatricula = recebeValorUser;
        this.userSenha = recebeValorUserSenha;
        //console.log(this.userSenha + ' - ' + this.userMatricula);
    }
    LoginProvider.prototype.getTipoRequerimento = function () {
        throw new Error("Method not implemented.");
    };
    LoginProvider.prototype.getLoginUser = function () {
        return this.http.get(this.urlLogin + this.userMatricula + "/" + this.userSenha);
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=loginProvider.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map