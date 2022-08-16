(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guneetsinghlamba/Documents/Dexter/Guneet/src/main.ts */"zUnb");


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "StableHacks, Toronto - October 2019 - July 2020");
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    //   title = 'Guneet';
    //   projectName:any;
    //   list = [' Design 🎨','<Develop 💻/>', 'Deploy ☁️😶‍🌫️']
    //   isMobile:Boolean = false
    //   iosApplicationArray=[
    //   {id:2,name: "Parking Application",img:"assets/parking.png",link:"https://bitbucket.org/GuneetSingh311/parkingspotterproject/src/master/"},
    //   {id: 3, name:"RPS",img:"assets/rps.png",link:"https://bitbucket.org/GuneetSingh311/guneet_rockpaperscissorproject/src/master/"},
    //   {id:4,name:"ChatBot",img:"assets/chatbot.png",link:"https://bitbucket.org/GuneetSingh311/chattyapp/src/master/"},
    //   {id:5,name:"Netflix Clone",img:"assets/nflx.png",link:"https://bitbucket.org/GuneetSingh311/netflix-clone-app/src/master/NetflixClone/"},
    //   {id: 6,name:"fifaApp",img:"assets/fifa.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5314_activity3-5/src/master/"},
    //   {id:7,name:"FDG",img:"assets/dragongame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_androidassignment/src/master/"},
    //   {id: 8,name:"NCG",img:"assets/catgame.png",link:"https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_iosassignment/src/master/"},
    //   // {id:1,name: "Chakra",img:"assets/chakra.png",link:"https://apps.apple.com/ca/app/chakra/id1509880276"}
    // ]
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        // if(window.innerWidth < 900)
        // {
        //   this.isMobile = true
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".profileImage[_ngcontent-%COMP%] {\n  height: 170px;\n  width: 170px;\n  border-radius: 50%;\n  border-color: #FFD300;\n  justify-content: center;\n  margin-top: -6%;\n  box-shadow: 5px 5px 10px rgba(113, 88, 88, 0);\n  padding: 3px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: x-large;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.tabBar[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.showColumn[_ngcontent-%COMP%] {\n  column-count: 3;\n}\n\n.projectHeader[_ngcontent-%COMP%] {\n  background-color: #030327;\n  text-align: center;\n  border-width: 6px;\n  width: 100%;\n  box-shadow: 5px 5px 10px rgba(113, 88, 88, 0);\n}\n\n.quote[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  border-radius: 10px 20px 10px 20px;\n  border-color: yellowgreen;\n  background-color: #030327;\n  text-align: center;\n  border-style: solid;\n  float: right;\n  border-width: 6px;\n  width: 60%;\n  margin-left: 5%;\n}\n\n.image[_ngcontent-%COMP%] {\n  border-radius: 10px 20px 10px 20px;\n  width: 200px;\n  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.63);\n}\n\n.imageCoding[_ngcontent-%COMP%] {\n  border-radius: 10px 20px 10px 20px;\n  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.63);\n  width: 350px;\n  height: 300px;\n}\n\n#myVideo[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n@media screen and (max-width: 490px) {\n  .profileImage[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    margin-left: 5%;\n    margin-top: -30%;\n    box-shadow: 5px 5px 10px rgba(113, 88, 88, 0);\n    padding: 3px;\n  }\n\n  .tabBar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .showColumn[_ngcontent-%COMP%] {\n    column-count: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0FBQUw7O0FBRUE7RUFFRyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUg7O0FBRUE7RUFFRyxVQUFBO0FBQUg7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFHSSx5QkFBQTtFQUVBLGtCQUFBO0VBR0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEsNkNBQUE7QUFMSjs7QUFRQTtFQUVJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0QsWUFBQTtFQUNDLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUVJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FBUEo7O0FBU0E7RUFFSSxrQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFQSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVNBO0VBQ0k7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLGdCQUFBO0lBQ0EsNkNBQUE7SUFDQSxZQUFBO0VBUEY7O0VBU0U7SUFFSSxXQUFBO0VBUE47O0VBU0U7SUFDSSxlQUFBO0VBTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1hZ2VcbntcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOjE3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItY29sb3I6ICNGRkQzMDA7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBtYXJnaW4tdG9wOi02JTtcbiAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMTEzLCA4OCwgODgsIDApO1xuICAgICBwYWRkaW5nOiAzcHg7IFxufVxuLmljb25cbntcbiAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiQmFyXG57XG4gICB3aWR0aDogNzAlO1xufVxuLnNob3dDb2x1bW5cbntcbiAgICBjb2x1bW4tY291bnQ6IDM7XG59XG4ucHJvamVjdEhlYWRlclxue1xuICAgIC8vIGJvcmRlci1yYWRpdXM6MTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzI3O1xuICAgIC8vIGhlaWdodDogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkIDtcbiAgICAvLyBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNzB2aDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgxMTMsIDg4LCA4OCwgMCk7XG4gICAgXG59XG4ucXVvdGVcbntcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzI3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIDtcbiAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmltYWdlIFxue1xuICAgIGJvcmRlci1yYWRpdXM6MTBweCAyMHB4IDEwcHggMjBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG59XG4uaW1hZ2VDb2RpbmcgXG57XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuI215VmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlOyBcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgLnByb2ZpbGVJbWFnZXtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDotMzAlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDExMywgODgsIDg4LCAwKTtcbiAgICBwYWRkaW5nOiAzcHg7IFxuICAgIH1cbiAgICAudGFiQmFyXG4gICAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNob3dDb2x1bW4ge1xuICAgICAgICBjb2x1bW4tY291bnQ6IDA7XG4gICAgfVxufSJdfQ== */"] });
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
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");




















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
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LandingPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LandingPageComponent"]
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
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]
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




function SkillsComponent_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 4);
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
        this.skillsArray = ["Swift ⎨🕊⎬", "SwiftUI 📱", "XCode 💻", "Angular ⎨🅰️⎬", "TypeScript⎨✝️⎬", "JavaScript⎨🉑⎬", "C++ ⎨🔱⎬", "MySQL ", "Blockchain", "Web3.0", "Firebase ", "NodeJS", "AdobeXD 🎨", "HTML", "CSS", "Solidity"];
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
        // added some changes
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 4, vars: 1, consts: [[1, "row", 2, "height", "90%"], [1, "skillSelection", "col-md-12", 2, "margin-left", "5%"], ["aria-label", "skillSelection"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_mat_chip_3_Template, 2, 1, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsArray);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__["MatChip"]], styles: ["@media screen and (max-width: 490px) {\n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNGO0lBRUksV0FBQTtFQUhGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTBweCkge1xuLmV4YW1wbGUtZnVsbC13aWR0aFxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LandingPageComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_div_92_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openLink(app_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", app_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.name);
} }
class LandingPageComponent {
    constructor() {
        this.ApplicationArray = [
            { id: 9, name: "TextToxic is a web application built on tensorflowjs model for detecting text sentiment and giving user feedback for the text they input. It shows how much toxicity was in a text", img: "assets/tox.png", link: "https://github.com/Guneet31/TextToxic" },
            { id: 2, name: "Parking Application is an iOS application developed using Swift. It shows users nearest parking spots for selected location", img: "assets/parking.png", link: "https://bitbucket.org/GuneetSingh311/parkingspotterproject/src/master/" },
            { id: 3, name: "Rock Paper Scissor is an iOS application/game developed using Swift. It is based on reallife rock paper scissor game and support multiplayer support for P2P experience using firebase. It makes connection using unique key and on winning sends user notification", img: "assets/rps.png", link: "https://bitbucket.org/GuneetSingh311/guneet_rockpaperscissorproject/src/master/" },
            { id: 4, name: "AIChatBot is application developed using IBM watson for interacting with user and responsing to their queries", img: "assets/chatbot.png", link: "https://bitbucket.org/GuneetSingh311/chattyapp/src/master/" },
            { id: 5, name: "Netflix Clone is just an experimentation using Swift and JavaScript to create a clone of Netflix Application to get data for movies/shows", img: "assets/nflx.png", link: "https://bitbucket.org/GuneetSingh311/netflix-clone-app/src/master/NetflixClone/" },
            { id: 6, name: "FifaApp is a application which shows upcoming football matches and sends user notification on apple watch", img: "assets/fifa.png", link: "https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5314_activity3-5/src/master/" },
            { id: 7, name: "FDG is Mobile/Web game where a dragon is running away from monsters and avoiding collision with objects. Project purpose was to understand parallax effect, game physics and collision detection", img: "assets/dragongame.png", link: "https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_androidassignment/src/master/" },
            { id: 8, name: "NCG is Mobile/Web game where a Ninja cat is avoiding collision with aliens too proceed to next level. Project purpose was to understand physics, game user interfaces and Spritekit/SceneKit impementation", img: "assets/catgame.png", link: "https://bitbucket.org/GuneetSingh311/guneetsingh_c0727012_mad5244_iosassignment/src/master/" },
        ];
    }
    ngOnInit() {
    }
    openLink(link) {
        window.open(link);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 101, vars: 1, consts: [[1, "nes-container", "is-dark"], [1, "nes-container", "is-centered", "is-dark", 2, "border", "0"], ["src", "assets/coding.gif", 1, "image"], [1, "title", "name"], [1, "title", 2, "color", "mediumpurple"], [1, "nes-badge"], [1, "is-error"], [1, "nes-container", "is-centered", "is-dark", "introContainer"], [1, "title", "projectintro"], ["src", "assets/apod.png", 1, "apod"], [2, "color", "mediumvioletred"], [1, "is-success", 3, "click"], ["src", "assets/vt.png", 1, "apod"], [2, "color", "mediumslateblue"], [1, "is-primary", 3, "click"], ["src", "assets/chrp.png", 1, "apod"], [2, "color", "magenta"], ["class", "lists", 4, "ngFor", "ngForOf"], [1, "nes-container", "is-centered", "is-dark"], [1, "icon-list"], ["href", "mailto:lambaguneetsingh@gmail.com"], [1, "nes-icon", "gmail", "is-medium"], [1, "nes-icon", "github", "is-medium", 3, "click"], [1, "nes-icon", "linkedin", "is-medium", 3, "click"], [1, "lists"], [1, "nes-list", "is-disc"], [1, "appImages", 3, "src"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Guneet Singh Lamba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | FullStack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, I am a dedicated and passionate FullStack Developer who likes to build Mobile/Web Application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " My tech-stack is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Angular8+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ionic5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nodejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Expressjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AWSCloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Swift4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "VueJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Here are some of my current development projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "DiscoverSpace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " is a web application which is developed using Angular framework and hosted on firebase. It shows data of latest APOD(Astronomy Picture of the Day), Mars Rover Photos and nearest asteroid to Earth using NASA openAPI. User can also select a filter to see the data for different time periods. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_65_listener() { return ctx.openLink("https://discoverspace-d2ee6.web.app/apod"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Live Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "VMT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " is a web3.0 application which is developed using Angular framework, Web3.js, Solidity(Ethereum). This project is a blockchain project where every time User creates a post, it gets minted on Ethereum blockchain as a ERC721 token(NFT).This project is currently in development phase.If you want to run this project on local system follow github page for instructions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_74_listener() { return ctx.openLink("https://github.com/Guneet31/vmthub-frontend"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "T1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " is a web application which is developed using Angular framework and hosted on firebase. This project is a social media application where users can create and share post. The backend is being developed using Nodejs, Expressjs, firebase database. It shows posts in realtime and in descending order.It is in development phase but you can sign up using Google and join T1 to create posts and share with the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_span_click_83_listener() { return ctx.openLink("https://chirp-7bcde.web.app/signup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Live Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "When Creative thoughts gets mixed with Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Here are some of my hobby projects which are not live but are still in development phase. You can click on the github link and follow instruction to run the project locally on your system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, LandingPageComponent_div_92_Template, 9, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Get in Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_i_click_99_listener() { return ctx.openLink("https://github.com/Guneet31"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_i_click_100_listener() { return ctx.openLink("https://www.linkedin.com/in/guneet-singh-lamba-6b5221156/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ApplicationArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".image[_ngcontent-%COMP%] {\n  border-radius: 10px 20px 10px 20px;\n  width: 400px;\n  margin-bottom: 2px;\n}\n\n.appImages[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-bottom: 2px;\n  border-radius: 10px 20px 10px 20px;\n}\n\n.apod[_ngcontent-%COMP%] {\n  width: 400px;\n  border-radius: 10px 20px 10px 20px;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n\n.projectintro[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n\n@media screen and (max-width: 600px) {\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    margin-bottom: 2px;\n  }\n\n  .appImages[_ngcontent-%COMP%] {\n    width: 50px;\n    margin-bottom: 2px;\n    border-radius: 10px 20px 10px 20px;\n  }\n\n  .apod[_ngcontent-%COMP%] {\n    width: 300px;\n    border-radius: 10px 20px 10px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQURKOztBQUdBO0VBRUksWUFBQTtFQUNBLGtDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlDO0VBRUcsa0JBQUE7QUFGSjs7QUFNQztFQUNHO0lBRUksWUFBQTtJQUNBLGtCQUFBO0VBSk47O0VBT0U7SUFFSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQ0FBQTtFQUxOOztFQU9FO0lBRUksWUFBQTtJQUNBLGtDQUFBO0VBTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UgXG57XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgLy8gYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG59XG4uYXBwSW1hZ2VzXG57XG4gICAgd2lkdGg6NzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuLmFwb2RcbntcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuXG4ubmFtZXtcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbiAucHJvamVjdGludHJvXG4ge1xuICAgIGNvbG9yOmdyZWVueWVsbG93O1xuICAgXG4gfVxuXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaW1hZ2UgXG4gICAge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG4gICAgfVxuICAgIC5hcHBJbWFnZXNcbiAgICB7XG4gICAgICAgIHdpZHRoOjUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIH1cbiAgICAuYXBvZFxuICAgIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgfVxuICAgIFxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
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
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");





const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectsComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const projects_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onAppClick(projects_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projects_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", projects_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectsComponent {
    constructor() {
        this.projectsArray = [
            { id: 1, name: "Gated NFT ", img: "assets/crypto.png", link: "https://devpost.com/software/crypto-jeweler-gated-nft-token" },
            { id: 2, name: "NFT Marketplace", img: "assets/vmt.png", link: "https://github.com/Guneet31/vmthub-frontend" },
            { id: 3, name: "SpaceXpo", img: "assets/spaceXpo.png", link: "https://discoverspace-d2ee6.web.app/apod" },
            { id: 4, name: "Chirp", img: "assets/chirp.png", link: "https://chirp-7bcde.web.app/" },
        ];
        this.projectName = { id: 1, name: "Chakra", img: "assets/chakra.png", link: "https://apps.apple.com/ca/app/chakra/id1509880276" };
        this.projectDescription = { id: 1, name: "Chakra", img: "assets/chakra.png" };
    }
    ngOnInit() {
    }
    onAppClick(appName) {
        this.projectName = this.projectsArray.find(ele => ele.name == appName);
        this.projectDescription = this.projectsArray.find(ele => ele.name == appName);
        window.open(this.projectName.link);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 3, vars: 1, consts: [[1, "row", "mt-4"], [1, "col-md-12"], ["class", "", "style", "height: 100px;width: 100px;margin:1%; cursor: pointer;border-radius: 20px;box-shadow: 10px 10px 5px rgba(212, 210, 210, 0.226)", 3, "src", "click", 4, "ngFor", "ngForOf"], [1, "", 2, "height", "100px", "width", "100px", "margin", "1%", "cursor", "pointer", "border-radius", "20px", "box-shadow", "10px 10px 5px rgba(212, 210, 210, 0.226)", 3, "src", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".cardAnimation[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n  animation-name: slidein;\n}\n\n@keyframes slidein {\n  from {\n    margin-bottom: 100%;\n  }\n  to {\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNFLG1CQUFBO0VBQUo7RUFJRTtJQUNFLGNBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEFuaW1hdGlvblxue1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMDAlO1xuIFxuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgbWFyZ2luLXRvcDogMCU7XG4gIFxuICAgIH1cbiAgfSJdfQ== */"] });
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