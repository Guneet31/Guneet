(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guneetsinghlamba/Desktop/Guneet/src/main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class ExperienceComponent {
    constructor() { }
    ngOnInit() {
        this.company1Description = "<p><li>Frontend development using Angular, TypeScript, iOS, Swift, Swift UI</li><li>Backend development using Loopback Node.js MySQL DB management and performing queries as per tasks</li><li> Deploy code on Google Cloud</li><li>Bitbucket for version control</li></p>";
        this.company2Description = "<p><li>Frontend development using Angular, TypeScript</li><li>Backend development using Node.js, firebase</li><li> Performed frontend end testing using Selenium and Java</li><li> Deploy code on Jenkins, AWS Cloud</li><li>Bitbucket used for version control</li><p>";
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 11, vars: 2, consts: [[1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card", 2, "margin-top", "6%", "width", "90%"], [1, "title"], [1, "subTitle", 3, "innerHtml"], [1, "card", 2, "margin-top", "5%", "width", "90%"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sustainable Risk Strategies, Toronto - August 2020 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DistApps, Toronto - October 2019 - July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.company1Description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.company2Description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  box-shadow: 5px, 10px black;\n}\n\n@media screen and (max-width: 490px) {\n  .card[_ngcontent-%COMP%] {\n    border-radius: 20px !important;\n    box-shadow: 5px, 10px black;\n    margin-left: 4%;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    text-align: start;\n    padding: 10px;\n  }\n\n  .subTitle[_ngcontent-%COMP%] {\n    text-align: start;\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksOEJBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUtHO0VBQ0k7SUFDQyw4QkFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtFQUZOOztFQUlFO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VBRE47O0VBSUU7SUFFSSxpQkFBQTtJQUNBLFlBQUE7RUFGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG5cbiAgICAvLyBib3JkZXI6IDAuNXB4IHNvbGlkO1xuICAgIC8vIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogNXB4LDEwcHggcmdiKDAsIDAsIDApIDtcbiAgIH1cblxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcbiAgICAgICAuY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiA1cHgsMTBweCByZ2IoMCwgMCwgMCkgO1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLnN1YlRpdGxlXG4gICAge1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cbiAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B2Zs":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class EducationComponent {
    constructor() { }
    ngOnInit() {
        this.school1Description = "<p><li>Maintained 3.4 GPA At the time of Graduation</li><li>Studied about various mobile application development tools and technologies</li><li>Worked as a Web Developer-Intern</li></p>";
        this.school2Description = "<p><li>Maintained 3.2 GPA At the time of Graduation</li><li>Studied about various programming language, algorithms subjects, data structures</li><li>Worked on industrial projects during summer internships and training</li><li>Participated and Received awards for tech-projects in University tech-fests</li>";
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 9, vars: 2, consts: [[1, "card", 2, "margin-top", "8%", "padding-right", "10px"], [3, "innerHTML"], [1, "card", 2, "margin-top", "5%"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mobile Application Design and Developement - Lambton College, Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bachelors in Computer Science and Engineering - Chandigarh University, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.school1Description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.school2Description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  box-shadow: 5px, 10px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLDhCQUFBO0VBQ0EsMkJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcblxuICAgIC8vIGJvcmRlcjogMC41cHggc29saWQ7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiA1cHgsMTBweCByZ2IoMCwgMCwgMCkgO1xuICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _github_typing_effect_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @github/typing-effect-element */ "9uCJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "B2Zs");










class AppComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.title = 'Guneet';
        this.list = [' Design 🎨', '<Develop 💻/>', 'Deploy ☁️😶‍🌫️'];
        this.isMobile = false;
    }
    ngOnInit() {
        if (window.innerWidth < 900) {
            this.isMobile = true;
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 2, consts: [[1, "row"], [1, "upperBox", 2, "height", "25vh", "width", "100%", "background-color", "cornflowerblue"], ["id", "welcomeText", 2, "color", "black", "text-align", "center", "font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"], [3, "StringList", "speed"], [1, "col-md-12", 2, "text-align", "center"], ["src", "assets/profile_guneet.png", 1, "profileImage"], [1, "belowBox", "col-md-12", 2, "height", "10%", "width", "100%", "margin-top", "-5px", "text-align", "center"], [2, "text-align", "center", "font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"], [1, "fab", "fa-linkedin", "icon"], [1, "fas", "fa-envelope", "icon", 3, "click"], [1, "fas", "fa-mobile", "icon", 3, "click"], [1, "fab", "fa-app-store-ios", "icon"], [1, "row", 2, "height", "100%"], [1, "col-md-3", "d-none", "d-md-block"], [1, "col-md-8"], [1, "tabBars"], ["label", "Projects \uD83D\uDDC2"], ["label", "Skills \u2692\uFE0F"], ["label", "Experience \uD83D\uDCBC"], ["label", "Education \uD83D\uDCDA"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngtypewriter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Guneet Singh Lamba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Web and Mobile Application Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_15_listener() { return ctx.openSnackBar("XXX-xxx-XXXX", "Message"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_16_listener() { return ctx.openSnackBar("XXX-xxx-XXXX", "Call"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("StringList", ctx.list)("speed", 1000);
    } }, directives: [angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__["TypewriterComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"]], styles: [".profileImage[_ngcontent-%COMP%] {\n  height: 170px;\n  width: 170px;\n  border-radius: 50%;\n  border-color: #FFD300;\n  justify-content: center;\n  margin-top: -6%;\n  box-shadow: 5px 5px 10px rgba(113, 88, 88, 0);\n  padding: 3px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: x-large;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.tabBar[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.showColumn[_ngcontent-%COMP%] {\n  column-count: 3;\n}\n\n@media screen and (max-width: 490px) {\n  .profileImage[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    margin-left: 5%;\n    margin-top: -30%;\n    box-shadow: 5px 5px 10px rgba(113, 88, 88, 0);\n    padding: 3px;\n  }\n\n  .tabBar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .showColumn[_ngcontent-%COMP%] {\n    column-count: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0FBQUw7O0FBRUE7RUFFRyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUg7O0FBRUE7RUFFRyxVQUFBO0FBQUg7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEsZ0JBQUE7SUFDQSw2Q0FBQTtJQUNBLFlBQUE7RUFERjs7RUFHRTtJQUVJLFdBQUE7RUFETjs7RUFHRTtJQUNJLGVBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZVxue1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6MTcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRDMwMDtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIG1hcmdpbi10b3A6LTYlO1xuICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgxMTMsIDg4LCA4OCwgMCk7XG4gICAgIHBhZGRpbmc6IDNweDsgXG59XG4uaWNvblxue1xuICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgcGFkZGluZzogMTBweDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJCYXJcbntcbiAgIHdpZHRoOiA3MCU7XG59XG4uc2hvd0NvbHVtblxue1xuICAgIGNvbHVtbi1jb3VudDogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDkwcHgpIHtcbiAgICAucHJvZmlsZUltYWdle1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOi0zMCU7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMTEzLCA4OCwgODgsIDApO1xuICAgIHBhZGRpbmc6IDNweDsgXG4gICAgfVxuICAgIC50YWJCYXJcbiAgICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2hvd0NvbHVtbiB7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "B2Zs");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function SkillsComponent_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_mat_chip_3_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const skill_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setSkill(skill_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class SkillsComponent {
    constructor() {
        this.skillsArray = ["Swift ⎨🕊⎬", "SwiftUI 🔥📱", "XCode 💻", "Angular ⎨🅰️⎬", "TypeScript⎨✝️⎬", "JavaScript⎨🉑⎬", "C++ ⎨🔱⎬", "MySQL 📀", "Firebase 💿", "NodeJS ⎨🚊⎬", "AdobeXD 🎨", "Team Work 👩🏼‍💻🧑🏻‍💻", "Time Management ⏱"];
        this.selectedSkill = "Swift ⎨🕊⎬";
        this.selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects<br/> Worked on fullstack iOS Applications<br/>Developed ml models in XCode using Swift</p>";
    }
    ngOnInit() {
    }
    setSkill(skill) {
        this.selectedSkill = this.skillsArray.find(ele => ele == skill);
        console.log(this.selectedSkill);
        if (this.selectedSkill == "Swift ⎨🕊⎬") {
            this.selectedSkillDescription = "<p>Developed iOS Applications using Swift 3.0+<br/>Experience working on frameworks such as Map Kit, Sprite Kit, AVKit, UIKit<br/>Experience working with cocoa pods inside projects Worked on fullstack iOS Applications.<br/>Developed ml models in XCode using Swift.</p>";
        }
        else if (this.selectedSkill == "SwiftUI 🔥📱") {
            this.selectedSkillDescription = "<p> SwiftUI is a set of tools which helps in building ios applicatons fast<br/> Worked on projects which integrage SwiftUI and UI Kit<br/>Experience working with component based architecture<br/>Published iOS application written in SwiftUI on appstore</p>";
        }
        else if (this.selectedSkill == "XCode 💻") {
            this.selectedSkillDescription = "<p>Experience working with IDE<br/>Project Setup<br/>Application Architecture Design<br/>Building and packaging application for pusblishing on appstore</p>";
        }
        else if (this.selectedSkill == "Angular ⎨🅰️⎬") {
            this.selectedSkillDescription = "<p>Experience working with Angular7+<br/> Worked on live projects<br/>Installation of node packages and integrating in application<br/>Experience working with angular material for responsive web design<br/>Experience working with component based architecture</p>";
        }
        else if (this.selectedSkill == "TypeScript⎨✝️⎬") {
            this.selectedSkillDescription = "<p>Experience working with TypeScript<br/> Worked on live projects<br/>Used for developing Angular7+ web application</p>";
        }
        else if (this.selectedSkill == "JavaScript⎨🉑⎬") {
            this.selectedSkillDescription = "<p>Experience working with JavaScript<br/>Developed web applications using JavaScript<br/>Worked on live projects based on JavaScript</p>";
        }
        else if (this.selectedSkill == "C++ ⎨🔱⎬") {
            this.selectedSkillDescription = "<p>Knowledge of C++ programming language<br/>Worked on college projects based on management projects and games<br/>Knowledge of OOPS and Data Structures in c++</p>";
        }
        else if (this.selectedSkill == "MySQL 📀") {
            this.selectedSkillDescription = "<p>Experience working on live projects based on MySQL<br/>Knowledge of Relation Database Mangement System<br/>Experience with setting up schemas,creating table, insertion and other MySQL opetations<br/>Hosting MySQL database server</p>";
        }
        else if (this.selectedSkill == "Firebase 💿") {
            this.selectedSkillDescription = "<p>Experience working with Firebase<br/>Worked with firebase iOS sdk for developing cloud based applications<br/>Experience working with GCP and google cloud functions<br/>Integrating Google ML in iOS<br/>Experience with Google Analytics and Google AdMob</p>";
        }
        else if (this.selectedSkill == "NodeJS ⎨🚊⎬") {
            this.selectedSkillDescription = "<p>Worked in NodeJS environment to build backend solutions for live projects<br/>Experience working with ExpressJs with Nodejs<br/>Experience working with IBM Loopback for API generation<br/>Worked with Angular7+,NodeJS and MySQl for developing fullstack applications</p>";
        }
        else if (this.selectedSkill == "AdobeXD 🎨") {
            this.selectedSkillDescription = "<p>Experience in developing UI for iOS and web apps<br/>Worked on UI/UX prototyping to turn design ideas into reality</p>";
        }
        else if (this.selectedSkill == "Team Work 👩🏼‍💻🧑🏻‍💻") {
            this.selectedSkillDescription = "<p>Experience working in teams with 4-5 members including team lead<br/>Respect for team members<br/>Enjoy sharing ideas</p>";
        }
        else if (this.selectedSkill == "Time Management ⏱") {
            this.selectedSkillDescription = "<p>Experience working in time constraints<br/>Experience working on live projects which has deadlines to meet<br/>Follow Scrum and agile techniques to achieve goals<br/></p>";
        }
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 9, vars: 3, consts: [[1, "row", 2, "height", "90%"], [1, "skillSelection", "col-md-4", 2, "margin-top", "6%"], ["aria-label", "skillSelection"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "skillDetails", "col-md-8", 2, "margin-top", "6%"], [3, "innerHTML"], [2, "cursor", "pointer", 3, "click"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_mat_chip_3_Template, 2, 1, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.selectedSkillDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChip"]], styles: ["@media screen and (max-width: 490px) {\n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNGO0lBRUksV0FBQTtFQUhGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xuLmV4YW1wbGUtZnVsbC13aWR0aFxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function ProjectsComponent_mat_grid_tile_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_mat_grid_tile_3_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const projects_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onAppClick(projects_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projects_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", projects_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent {
    constructor() {
        this.projectsArray = [{ id: 1, name: "Chakra", img: "assets/chakra.png" },
            { id: 2, name: "Parking Application", img: "assets/parking.png" },
            { id: 3, name: "RPS", img: "assets/rps.png" },
            { id: 4, name: "ChatBot", img: "assets/chatbot.png" },
            { id: 5, name: "Netflix Clone", img: "assets/nflx.png" },
            { id: 6, name: "fifaApp", img: "assets/fifa.png" },
            { id: 7, name: "FDG", img: "assets/dragongame.png" },
            { id: 8, name: "NCG", img: "assets/catgame.png" }];
        this.projectName = { id: 1, name: "Chakra", img: "assets/chakra.png" };
        this.projectDescription = { id: 1, name: "Chakra", img: "assets/chakra.png" };
    }
    ngOnInit() {
    }
    onAppClick(appName) {
        this.projectName = this.projectsArray.find(ele => ele.name == appName);
        this.projectDescription = this.projectsArray.find(ele => ele.name == appName);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 10, vars: 3, consts: [[1, "row", "mt-4"], [1, "col-md-4"], ["cols", "2", "rowHeight", "1:1"], [4, "ngFor", "ngForOf"], [1, "col-md-8"], [1, "cardAnimation", 2, "height", "100px", "width", "100px", "cursor", "pointer", "border-radius", "20px", "box-shadow", "-5px,10x,gray", 3, "src", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_mat_grid_tile_3_Template, 2, 1, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectName.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectDescription.name);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"]], styles: [".cardAnimation[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n  animation-name: slidein;\n}\n\n@keyframes slidein {\n  from {\n    margin-bottom: 100%;\n  }\n  to {\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNFLG1CQUFBO0VBQUo7RUFJRTtJQUNFLGNBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEFuaW1hdGlvblxue1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xuIFxuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgbWFyZ2luLXRvcDogMCU7XG4gIFxuICAgIH1cbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map