(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a1bg489321\FMI_4year\E-businessSystems\E-Business-Systems-Project-test\webtech-course-project-develop\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "6F30":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_login_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/login-form-control-name.enum */ "8PSq");
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.userService.getFormControlErrorMessage(ctx_r0.emailFormControl));
} }
function LoginComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userService.getFormControlErrorMessage(ctx_r1.passwordFormControl));
} }
function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
} }
class LoginComponent {
    constructor(formBuilder, userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitButtonText = 'Login';
        this.loginFailed = false;
        this.loginForm = formBuilder.group({
            [_models_login_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlName"].Email]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            [_models_login_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlName"].Password]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]]
        });
        this.emailFormControl = this.loginForm.get(_models_login_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlName"].Email);
        this.passwordFormControl = this.loginForm.get(_models_login_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlName"].Password);
    }
    onFormSubmit() {
        const email = this.emailFormControl.value;
        const password = this.passwordFormControl.value;
        this.userService.login(email, password)
            .subscribe(() => {
            this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_2__["Route"].Workspaces]);
        }, (err) => {
            this.loginFailed = true;
            this.errorMessage = err.error.message;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 8, consts: [[1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "type", "email", "placeholder", "Email", 3, "formControl"], [4, "ngIf"], ["matInput", "", "type", "email", "placeholder", "Password", 3, "formControl"], ["mat-button", "", "type", "submit", 1, "submit-button", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.loginForm.valid && ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginComponent_mat_error_3_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoginComponent_mat_error_6_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.passwordFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.passwordFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.submitButtonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["[_nghost-%COMP%] {\r\n    width: 50%;\r\n    height: 60vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #fafafa;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 5px 10px 18px rgb(84 110 134);\r\n    margin-top: 8rem;\r\n}\r\n\r\n\r\n\r\n.form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin : 0 auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: 0.5rem;\r\n    width: 100%;\r\n    background-color: #fafafa;\r\n}\r\n\r\n\r\n\r\nmat-error[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: rgb(215 159 251);\r\n    border: 0.3px solid;\r\n    border-color: rgba(158,23,246,1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  background-image: radial-gradient(100% 100% at 100% 0, rgba(158,23,246,1) 0, rgba(223,207,235,1));\r\n  border: 0;\r\n  border-radius: 6px;\r\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus {\r\n  box-shadow:  0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(158,23,246,1) 0 -3px 0 inset;\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(158,23,246,1) 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:active {\r\n  box-shadow: rgba(158,23,246,1) 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}\r\n\r\n\r\n\r\n.matt-button-wrapper[_ngcontent-%COMP%] {\r\n    color: rgba(158,23,246,1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7Ozs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7Ozs7QUFHQSxRQUFROzs7O0FBQ1I7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsaUdBQWlHO0VBQ2pHLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsb0hBQW9IO0VBQ3BILHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxzQkFBaUI7R0FBakIscUJBQWlCO09BQWpCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UsdUlBQXVJO0FBQ3pJOzs7O0FBRUE7RUFDRSxtSEFBbUg7RUFDbkgsMkJBQTJCO0FBQzdCOzs7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsMEJBQTBCO0FBQzVCOzs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoidXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggcmdiKDg0IDExMCAxMzQpO1xyXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4gOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxubWF0LWVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1IDE1OSAyNTEpO1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNTgsMjMsMjQ2LDEpO1xyXG59XHJcblxyXG5cclxuLyogQ1NTICovXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDEwMCUgMTAwJSBhdCAxMDAlIDAsIHJnYmEoMTU4LDIzLDI0NiwxKSAwLCByZ2JhKDIyMywyMDcsMjM1LDEpKTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgLjQpIDAgMnB4IDRweCxyZ2JhKDQ1LCAzNSwgNjYsIC4zKSAwIDdweCAxM3B4IC0zcHgscmdiYSg1OCwgNjUsIDExMSwgLjUpIDAgLTNweCAwIGluc2V0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCIsbW9ub3NwYWNlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6ICAwIDAgMCAxLjVweCBpbnNldCwgcmdiYSg0NSwgMzUsIDY2LCAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIC4zKSAwIDdweCAxM3B4IC0zcHgsIHJnYmEoMTU4LDIzLDI0NiwxKSAwIC0zcHggMCBpbnNldDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAuMykgMCA3cHggMTNweCAtM3B4LCByZ2JhKDE1OCwyMywyNDYsMSkgMCAtM3B4IDAgaW5zZXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMTU4LDIzLDI0NiwxKSAwIDNweCA3cHggaW5zZXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbi5tYXR0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDE1OCwyMywyNDYsMSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "85G9":
/*!******************************************************!*\
  !*** ./src/app/cart-dialog/cart-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: CartDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDialogComponent", function() { return CartDialogComponent; });
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartDialogComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDialogComponent_div_12_div_1_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.removeData(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "..//..//assets/", data_r2.imgUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 3, data_r2.price));
} }
function CartDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartDialogComponent_div_12_div_1_Template, 11, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sampleData);
} }
class CartDialogComponent {
    constructor(router) {
        this.router = router;
        this.sampleData = [{
                name: 'StartUp',
                imgUrl: 'startup.png',
                description: '1-2 people',
                price: 99.00,
                status: 'status'
            },
            {
                name: 'Business',
                imgUrl: 'business.png',
                description: 'Up to 5 people',
                price: 299.00,
                status: 'status'
            },
            {
                name: 'Enterprise',
                imgUrl: 'enterprise.png',
                description: 'Up to 10 people',
                price: 499.00,
                status: 'status'
            }];
    }
    ngOnInit() {
        return this.sampleData;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeData(data) {
        // this.sampleData = this.sampleData.filter((element) => {
        //   if (element.name === data.name) {
        //     element.status = '';
        //   }
        //   return element.name !== data.name;
        // });
        // this.sampleData.next(this.tempData);
    }
    clearCart() {
        // this.sharedSerivce.clearData();]];
    }
    navigateToContinueOrderModal() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].ContinueOrderModal]);
    }
}
CartDialogComponent.ɵfac = function CartDialogComponent_Factory(t) { return new (t || CartDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CartDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartDialogComponent, selectors: [["app-cart-dialog"]], decls: 13, vars: 3, consts: [[1, "items_cart_dialog_parent"], [1, "itmes_cart"], [1, "header-btns"], ["mat-button", "", 1, "rounded_Rectangle_7", 3, "click"], [4, "ngIf"], ["class", "gog_cart_items_holder", 4, "ngFor", "ngForOf"], [1, "gog_cart_items_holder"], [3, "src"], [3, "click"]], template: function CartDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDialogComponent_Template_button_click_8_listener() { return ctx.clearCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Clear Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartDialogComponent_Template_button_click_10_listener() { return ctx.navigateToContinueOrderModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Continue Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CartDialogComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.sampleData.length, " ", ctx.sampleData.length > 1 ? "Items" : "Item", " in cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sampleData.length > 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".items_cart_dialog_parent[_ngcontent-%COMP%]{\r\n    width: 380px;\r\n    box-shadow: 0px 3px 15px 0 rgba(0, 0, 0, 0.15);\r\n  border: solid 1px rgba(0, 0, 0, 0.2);\r\n  background-color: #f7f7f7;\r\n  position: fixed;\r\n  right: 100px;\r\n  top: 56px;\r\n}\r\n.itmes_cart[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n.itmes_cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){\r\n    margin: auto;\r\n    margin-left: 3px;\r\n}\r\n.itmes_cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){\r\n    margin-right: 6px;\r\n}\r\n.header-btns[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.rounded_Rectangle_7[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    line-height: 1.57;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    width: 129px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.3);\r\n    background-image: linear-gradient(to top, #7a3dc6, #b65ae2);\r\n    border-color: #7a3dc6;\r\n}\r\n.items_cart_dialog_parent[_ngcontent-%COMP%]{\r\n    z-index: 9999;\r\n    border: solid 1px rgba(0, 0, 0, 0.2);\r\n  background-color: #f7f7f7;\r\n\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    border-top: solid 1px rgba(0, 0, 0, 0.2);\r\n    padding: 5px;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-stretch: normal;\r\n    color: #212121;\r\n    margin: 5px 0px;\r\n    margin-bottom: 0;\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){\r\n    padding: 5px;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.08;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #212121;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%]{\r\n    opacity: 0.75;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  text-align: right;\r\n  color: rgba(64, 64, 64, 0.75);\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:nth-child(2)    > span[_ngcontent-%COMP%]{\r\n    visibility: visible;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    margin-top: 15px;\r\n    margin-left: 41px;\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3)    > span[_ngcontent-%COMP%]{\r\n    opacity: 0.90;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  text-align: right;\r\n  color: rgba(64, 64, 64, 0.75);\r\n}\r\n.gog_cart_items_holder[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\nwidth: 100px;\r\nheight: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOENBQThDO0VBQ2hELG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QywyREFBMkQ7SUFDM0QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDLHlCQUF5Qjs7QUFFM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1oiLCJmaWxlIjoiY2FydC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtc19jYXJ0X2RpYWxvZ19wYXJlbnR7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTAwcHg7XHJcbiAgdG9wOiA1NnB4O1xyXG59XHJcbi5pdG1lc19jYXJ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5pdG1lc19jYXJ0IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4uaXRtZXNfY2FydCBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJvdW5kZWRfUmVjdGFuZ2xlXzd7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NztcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAxMjlweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzdhM2RjNiwgI2I2NWFlMik7XHJcbiAgICBib3JkZXItY29sb3I6ICM3YTNkYzY7XHJcbn1cclxuLml0ZW1zX2NhcnRfZGlhbG9nX3BhcmVudHtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuXHJcbn1cclxuLmdvZ19jYXJ0X2l0ZW1zX2hvbGRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZ29nX2NhcnRfaXRlbXNfaG9sZGVyIHB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmdvZ19jYXJ0X2l0ZW1zX2hvbGRlciAgIGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmdvZ19jYXJ0X2l0ZW1zX2hvbGRlciAgZGl2OmZpcnN0LWNoaWxkICBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcbi5nb2dfY2FydF9pdGVtc19ob2xkZXIgICBkaXY6bnRoLWNoaWxkKDIpID4gc3BhbntcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5nb2dfY2FydF9pdGVtc19ob2xkZXI6aG92ZXIgICBkaXY6bnRoLWNoaWxkKDIpID4gc3BhbntcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmdvZ19jYXJ0X2l0ZW1zX2hvbGRlciAgIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xyXG59XHJcbi5nb2dfY2FydF9pdGVtc19ob2xkZXIgICBkaXY6bnRoLWNoaWxkKDMpID4gc3BhbntcclxuICAgIG9wYWNpdHk6IDAuOTA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcclxufVxyXG4uZ29nX2NhcnRfaXRlbXNfaG9sZGVyID4gaW1ne1xyXG53aWR0aDogMTAwcHg7XHJcbmhlaWdodDogNjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "8PSq":
/*!********************************************************************!*\
  !*** ./src/app/users/login/models/login-form-control-name.enum.ts ***!
  \********************************************************************/
/*! exports provided: LoginFormControlName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormControlName", function() { return LoginFormControlName; });
var LoginFormControlName;
(function (LoginFormControlName) {
    LoginFormControlName["Email"] = "email";
    LoginFormControlName["Password"] = "password";
})(LoginFormControlName || (LoginFormControlName = {}));


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(router) {
        this.router = router;
        this.heading = 'Welcome to WorkHub!';
        this.subheading = 'Create, collaborate and organize your work in one place';
        this.loginButtonText = 'Login if you are already an user';
        this.registerButtonText = 'Click here to register if you are new';
    }
    navigateToLoginPage() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Login]);
    }
    navigateToRegisterPage() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Register]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 4, consts: [[1, "headers"], [1, "heading"], [1, "subheading"], [1, "navigation-buttons"], [1, "navigation-button", 3, "click"], [1, "navigation-button-separator"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.navigateToLoginPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { return ctx.navigateToRegisterPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.subheading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loginButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.registerButtonText);
    } }, styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 90vh;\r\n    width: 99vw;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 60px;\r\n    color: rgb(235, 230, 243);\r\n    font-weight: bold;\r\n    margin: 50px;\r\n}\r\n\r\n.subheading[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 40px;\r\n    color: rgb(235, 230, 243);\r\n    font-weight: normal;\r\n    margin: 50px;\r\n}\r\n\r\n.navigation-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.navigation-button[_ngcontent-%COMP%] {\r\n    padding: 20px 20px;\r\n    border: none;\r\n    background: linear-gradient(184deg, rgba(202,151,239,1) 0%, rgba(158,36,237,1) 100%);\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    color: white;\r\n    border-radius: 16px;\r\n    text-align: center;\r\n    transition-duration: 0.4s;\r\n    box-shadow: 5px 10px 10px rgb(180, 93, 238);\r\n}\r\n\r\n.navigation-button[_ngcontent-%COMP%]:hover {\r\n    color: #ddb4f5;\r\n}\r\n\r\n.navigation-button-separator[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 35px;\r\n    color: rgb(139, 38, 207);\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvRkFBb0Y7SUFDcEYsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiA5OXZ3O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogcmdiKDIzNSwgMjMwLCAyNDMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjM1LCAyMzAsIDI0Myk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODRkZWcsIHJnYmEoMjAyLDE1MSwyMzksMSkgMCUsIHJnYmEoMTU4LDM2LDIzNywxKSAxMDAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2IoMTgwLCA5MywgMjM4KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZGRiNGY1O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1idXR0b24tc2VwYXJhdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6IHJnYigxMzksIDM4LCAyMDcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AYad":
/*!************************************************************************!*\
  !*** ./src/app/continue-order-modal/continue-order-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ContinueOrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueOrderModalComponent", function() { return ContinueOrderModalComponent; });
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContinueOrderModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Finishing order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Finish your order in 5 easy steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Step 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter your full name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContinueOrderModalComponent_div_2_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.userName);
} }
function ContinueOrderModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Finishing order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Finish your order in 5 easy steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Step 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter the name of the bank you use:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContinueOrderModalComponent_div_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.bankName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.bankName);
} }
function ContinueOrderModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Finishing order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Finish your order in 5 easy steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Step 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter the IBAN of your card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContinueOrderModalComponent_div_4_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.cardNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.cardNumber);
} }
function ContinueOrderModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Step 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Enter expiry date for your card:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContinueOrderModalComponent_div_5_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.expiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.expiryDate);
} }
function ContinueOrderModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Full name of user: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name of bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "IBAN: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Expiry date of a card: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.expiryDate);
} }
function ContinueOrderModalComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContinueOrderModalComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContinueOrderModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContinueOrderModalComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContinueOrderModalComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContinueOrderModalComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onCreateChatroom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ContinueOrderModalComponent {
    constructor(router) {
        this.router = router;
        this.step = 1;
        this.userName = '';
        this.bankName = '';
        this.cardNumber = '';
        this.expiryDate = '';
    }
    ngOnInit() {
    }
    submit() {
        this.step++;
    }
    previous() {
        this.step--;
    }
    onCreateChatroom() {
        alert('Successfully confirmed order!');
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Home]);
    }
}
ContinueOrderModalComponent.ɵfac = function ContinueOrderModalComponent_Factory(t) { return new (t || ContinueOrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContinueOrderModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContinueOrderModalComponent, selectors: [["app-continue-order-modal"]], decls: 11, vars: 8, consts: [[1, "wrap-modal"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "class", "prev-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "next-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "create-btn", 3, "click", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], [1, "modal-description"], [1, "step-title"], ["src", "assets/images/make_order.png", "alt", "Logo", 1, "logo-img"], [1, "modal-body"], ["for", "user-info", 1, "step-input-description"], ["type", "text", "id", "user-info", "name", "user-info", "placeholder", "Enter name...", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "user-info", "name", "user-info", "placeholder", "Enter name of bank...", "required", "", 3, "ngModel", "ngModelChange"], ["src", "./assets/images/make_order.png", "alt", "Logo", 1, "logo-img"], [1, "step-input-description"], ["type", "text", "id", "user-info", "name", "user-info", "placeholder", "Enter number of card...", "required", "", 3, "ngModel", "ngModelChange"], ["for", "description", 1, "step-input-description"], ["id", "description", "name", "description", "placeholder", "Enter expiry date...", 3, "ngModel", "ngModelChange"], ["id", "base-info-inline", 1, "info-part"], [1, "info-description"], [1, "info-data"], ["type", "button", 1, "prev-btn", 3, "click"], ["type", "button", 1, "next-btn", 3, "click"], ["type", "button", 1, "create-btn", 3, "click"]], template: function ContinueOrderModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContinueOrderModalComponent_div_2_Template, 13, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContinueOrderModalComponent_div_3_Template, 13, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContinueOrderModalComponent_div_4_Template, 13, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ContinueOrderModalComponent_div_5_Template, 9, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContinueOrderModalComponent_div_6_Template, 25, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContinueOrderModalComponent_button_8_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContinueOrderModalComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContinueOrderModalComponent_button_10_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step != 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\npadding: 0;\r\nmargin: 0;\r\nbox-sizing: border-box;\r\n}\r\n\r\n.wrap-modal[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: linear-gradient(260deg, rgb(205, 167, 231) 0%, rgb(161, 71, 221) 100%);\r\n  justify-content: center;\r\n  align-items: center;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 10px 10px 18px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: 2px solid rgb(205, 167, 231);\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n  background-color: rgb(239, 236, 241);\r\n}\r\n\r\nbutton.next-btn[_ngcontent-%COMP%], button.prev-btn[_ngcontent-%COMP%], button.create-btn[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 8px 30px;\r\n  border: none;\r\n  background: linear-gradient(200deg, rgb(181 74 255 / 65%) 0%, rgb(146 31 223 / 54%) 100%);\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  color: white;\r\n}\r\n\r\nbutton.prev-btn[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  flex-flow: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 140px;\r\n  height: 120px;\r\n  background: transparent;\r\n  border-radius: 100px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  font-size: 16px;\r\n}\r\n\r\n[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  font-size: 16px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 16px;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  color: rgb(95, 5, 131);\r\n  font-weight: bold;\r\n}\r\n\r\n.step-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: rgb(95, 5, 131);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.modal-description[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: rgb(72, 56, 75);\r\n  margin-top: 5px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.step-input-description[_ngcontent-%COMP%] {\r\n  color: rgb(95, 5, 131);\r\n  font-weight: 600;\r\n  display: inline-block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n#base-info-inline[_ngcontent-%COMP%]{\r\n display: flex;\r\n flex-flow: row wrap;\r\n align-items: center;\r\n}\r\n\r\n.info-part[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n\r\n.info-data[_ngcontent-%COMP%] {\r\n  color:rgb(95, 5, 131);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRpbnVlLW9yZGVyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtGQUFrRjtFQUNsRix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5RkFBeUY7RUFDekYsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUZBO0VBQ0UsZUFBZTtBQUNqQjs7QUFGQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJjb250aW51ZS1vcmRlci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuKiB7XHJcbnBhZGRpbmc6IDA7XHJcbm1hcmdpbjogMDtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLndyYXAtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2MGRlZywgcmdiKDIwNSwgMTY3LCAyMzEpIDAlLCByZ2IoMTYxLCA3MSwgMjIxKSAxMDAlKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDUsIDE2NywgMjMxKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzNiwgMjQxKTtcclxufVxyXG5cclxuYnV0dG9uLm5leHQtYnRuLFxyXG5idXR0b24ucHJldi1idG4sXHJcbmJ1dHRvbi5jcmVhdGUtYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsIHJnYigxODEgNzQgMjU1IC8gNjUlKSAwJSwgcmdiKDE0NiAzMSAyMjMgLyA1NCUpIDEwMCUpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uLnByZXYtYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBjb2xvcjogcmdiKDk1LCA1LCAxMzEpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RlcC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJnYig5NSwgNSwgMTMxKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiByZ2IoNzIsIDU2LCA3NSk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5zdGVwLWlucHV0LWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogcmdiKDk1LCA1LCAxMzEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuI2Jhc2UtaW5mby1pbmxpbmV7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1mbG93OiByb3cgd3JhcDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLXBhcnQge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWRhdGEge1xyXG4gIGNvbG9yOnJnYig5NSwgNSwgMTMxKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Aptu":
/*!**************************************************************************!*\
  !*** ./src/app/users/register/models/register-form-control-name.enum.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterFormControlName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormControlName", function() { return RegisterFormControlName; });
var RegisterFormControlName;
(function (RegisterFormControlName) {
    RegisterFormControlName["Name"] = "name";
    RegisterFormControlName["Email"] = "email";
    RegisterFormControlName["Password"] = "password";
})(RegisterFormControlName || (RegisterFormControlName = {}));


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
    production: false,
    serveUrl: 'http://localhost:3000',
    appTitle: 'WorkHub'
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

/***/ "BsGo":
/*!**************************************************!*\
  !*** ./src/app/templates/templates.component.ts ***!
  \**************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TemplatesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplatesComponent_div_2_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const data_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addItems(data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ADD TO CART");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "..//..//assets/", data_r1.imgUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.status === "IN CART" ? data_r1.status : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, data_r1.price), "");
} }
class TemplatesComponent {
    constructor() {
        this.sampleData = [{
                name: 'Template1',
                imgUrl: '90-day plan.png',
                description: '',
                price: 99.00,
                status: ''
            },
            {
                name: 'Template2',
                imgUrl: '90-day plan.png',
                description: '',
                price: 299.00,
                status: ''
            },
            {
                name: 'Template3',
                imgUrl: '90-day plan.png',
                description: '',
                price: 499.00,
                status: ''
            }];
    }
    // constructor(private sharedSerivce: SharedServiceService) { }
    ngOnInit() {
    }
    addItems(data) {
        // eslint-disable-next-line no-param-reassign
        data.status = 'IN CART'; // appending a new key status
        //  this.sharedSerivce.setItemData(data);
    }
    openDoc(pdfUrl, startPage) {
        window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
    }
}
TemplatesComponent.ɵfac = function TemplatesComponent_Factory(t) { return new (t || TemplatesComponent)(); };
TemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplatesComponent, selectors: [["app-templates"]], decls: 3, vars: 1, consts: [[1, "gog_home_game_content"], [1, "gog_cards_wrapper"], ["class", "gog_cards", 4, "ngFor", "ngForOf"], [1, "gog_cards"], [1, "gog_cards_details"], [3, "src"], [1, "add", 3, "click"], ["id", "price-tag"]], template: function TemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TemplatesComponent_div_2_Template, 13, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sampleData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".gog_content_body[_ngcontent-%COMP%]{\r\n    padding: 0 100px !important;\r\n}\r\n\r\n.gog_home_game_content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 100px;\r\n}\r\n\r\n.gog_cards_wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin:  50px 0px;\r\n    justify-content: space-around;\r\n}\r\n\r\n.gog_cards[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    min-height: 350px;\r\n    background: linear-gradient(200deg, rgb(205, 167, 231) 0%, rgb(177, 117, 218) 100%);;\r\n    box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n    bottom: 10px;\r\n    text-align: right;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: right;\r\n    color: rgba(27, 27, 27, 0.75);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: right;\r\n    color: rgba(27, 27, 27, 0.75);\r\n    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.25);\r\n    border: solid 1px rgba(0, 0, 0, 0.25);\r\n    padding: 2px 8px;\r\n    margin: 0px 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #bc21db;\r\n    border: solid 1px rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n    color: rgba(27, 27, 27, 0.75);\r\n    font-weight: 700;\r\n    line-height: 1.21;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n}\r\n\r\n.gog_cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 95%;\r\n    max-height: 60%;\r\n    height: 100%;\r\n    margin: 5px;\r\n    border: solid 5px rgb(205, 167, 231);\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    text-align: right;\r\n    align-self: center;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    color: rgba(27, 27, 27, 0.75);\r\n}\r\n\r\n#price-tag[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1GQUFtRjtJQUNuRiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDJDQUEyQztBQUMvQzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJ0ZW1wbGF0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ29nX2NvbnRlbnRfYm9keXtcclxuICAgIHBhZGRpbmc6IDAgMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvZ19ob21lX2dhbWVfY29udGVudCA+IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdvZ19jYXJkc193cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogIDUwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmdvZ19jYXJkc3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgcmdiKDIwNSwgMTY3LCAyMzEpIDAlLCByZ2IoMTc3LCAxMTcsIDIxOCkgMTAwJSk7O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uZ29nX2NhcmRzX2RldGFpbHMgPiBkaXYgPiBwe1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbn1cclxuXHJcbi5nb2dfY2FyZHNfZGV0YWlscyA+IGRpdiA+IHNwYW57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdvZ19jYXJkc19kZXRhaWxzID4gZGl2ID4gc3Bhbjpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjMjFkYjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLmdvZ19jYXJkc19kZXRhaWxze1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5nb2dfY2FyZHNfZGV0YWlscyA+IHB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjc1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdvZ19jYXJkcyA+IGRpdiA+IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYigyMDUsIDE2NywgMjMxKTtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjc1KTtcclxufVxyXG5cclxuI3ByaWNlLXRhZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F7zS":
/*!********************************************************!*\
  !*** ./src/app/profile-info/profile-info.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfileInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileInfoComponent.ɵfac = function ProfileInfoComponent_Factory(t) { return new (t || ProfileInfoComponent)(); };
ProfileInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileInfoComponent, selectors: [["app-profile-info"]], decls: 73, vars: 0, consts: [["id", "outer"], ["id", "title"], ["id", "content"], [1, "workspace"], [1, "left"], [1, "right"], [1, "template"], ["src", "..//..//assets/images/template.png", 1, "image"]], template: function ProfileInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username's workspaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Workspace 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ADD PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Workspace 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ADD PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Workspace 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ADD PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Workspace 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ADD PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n    height: 85vh;\r\n    width: 90%;\r\n    display: flex;\r\n\r\n}\r\n#outer[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: 2%;\r\n\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n    color: rgba(64, 64, 64, 0.75);\r\n\r\n}\r\n#content[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-radius: 8px;\r\n    border-color: purple;\r\n    height: 85%;\r\n    overflow: auto;\r\n    background-color: rgb(209 166 238);\r\n\r\n}\r\n.workspace[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid purple;\r\n    height: 30%;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    width: 12%;\r\n    height: 90%;\r\n    float:left;\r\n    margin-left: 2%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;    \r\n\r\n    float: right;\r\n    width: 80%;\r\n    height: 90%;\r\n}\r\n.template[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-width: 0.5px;\r\n    border-color: purple;\r\n    width: 100px;\r\n    height: 80%;\r\n    margin: 1%;\r\n    margin-top: 2%;\r\n    position:relative;\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-height: 80%;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    bottom: 0px;\r\n    text-align:center;\r\n    position: relative;\r\n    margin-top: 0px;\r\n    font-size: 13px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #c2fbd7;\r\n  border-radius: 100px;\r\n  color: rgba(64, 64, 64, 0.75);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;\r\n  padding: 7px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  border: 0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05) rotate(-1deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjOztBQUVsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQzs7QUFFdEM7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7O0lBRWYsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwRUFBMEU7RUFDMUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFpQjtHQUFqQixxQkFBaUI7T0FBakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJwcm9maWxlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4jb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuXHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzLCBoNCB7XHJcbiAgICBjb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcclxuXHJcbn1cclxuI2NvbnRlbnQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMTY2IDIzOCk7XHJcblxyXG59XHJcblxyXG4ud29ya3NwYWNlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sZWZ0IHtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7ICAgIFxyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4udGVtcGxhdGUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxufVxyXG5wIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyZmJkNztcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBjb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBDZXJlYnJpU2Fucy1SZWd1bGFyLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFJvYm90byxzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgtMWRlZyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "GhOa":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.enum */ "SFNm");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cart-dialog/cart-dialog.component */ "85G9");








function HeaderBarComponent_app_cart_dialog_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cart-dialog");
} }
class HeaderBarComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.searchText = '';
        this.sampleData = [];
        this.cartBoolean = false;
        this.headerMessage = _constants__WEBPACK_IMPORTED_MODULE_1__["NO_USER_LOGGED_IN_MESSAGE"];
        this.userLoggedIn = false;
        userService.userChanged$
            .subscribe(() => {
            const userName = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["USER_NAME_LOCAL_STORAGE_KEY"]);
            if (userName) {
                this.headerMessage = `Hello,: ${userName}!`;
                this.userLoggedIn = true;
            }
            else {
                this.headerMessage = _constants__WEBPACK_IMPORTED_MODULE_1__["NO_USER_LOGGED_IN_MESSAGE"];
                this.userLoggedIn = false;
            }
        });
    }
    onLogOutButtonClick() {
        this.headerMessage = _constants__WEBPACK_IMPORTED_MODULE_1__["NO_USER_LOGGED_IN_MESSAGE"];
        this.userLoggedIn = false;
        this.userService.logOut();
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Home]);
    }
    navigateToHomePage() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Home]);
    }
    navigateToProfileInfo() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].ProfileInfo]);
    }
    cartClicked() {
        this.cartBoolean = !this.cartBoolean;
    }
}
HeaderBarComponent.ɵfac = function HeaderBarComponent_Factory(t) { return new (t || HeaderBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_users_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderBarComponent, selectors: [["app-header-bar"]], decls: 21, vars: 3, consts: [["id", "navlist"], [1, "left-part"], ["id", "btn-menu-item", 1, "menu-item", 3, "click"], [1, "menu-item", 3, "click"], [1, "search"], ["action", "#"], ["type", "text", "placeholder", " Search in WorkHub ...", "name", "search"], ["type", "submit", "id", "search_btn"], ["src", "https://www.kindacode.com/wp-content/uploads/2020/12/search.png", "id", "search_icon", "alt", "Search icon"], [1, "right-part"], [3, "click"], ["src", "..//..//assets/ico_cart.png"], [1, "cart-value"], ["id", "logout", 1, "menu-item", 3, "click"], [4, "ngIf"]], template: function HeaderBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderBarComponent_Template_button_click_4_listener() { return ctx.navigateToHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "WorkHub Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderBarComponent_Template_button_click_6_listener() { return ctx.navigateToProfileInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Profile Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderBarComponent_Template_button_click_14_listener() { return ctx.cartClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderBarComponent_Template_button_click_18_listener() { return ctx.onLogOutButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HeaderBarComponent_app_cart_dialog_20_Template, 1, 0, "app-cart-dialog", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.headerMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sampleData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartBoolean);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CartDialogComponent"]], styles: ["#navlist[_ngcontent-%COMP%] {\r\n    margin: 0 auto; width: 1520px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    border-bottom: 2px solid #501666;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    color: rgba(29, 29, 29, 0.75);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin-left: 20px;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: rgba(29, 29, 29, 0.75);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin-left: 20px;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    border-radius: 7px;\r\n}\r\n\r\n.right-part[_ngcontent-%COMP%] {\r\n    float:right;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\n.menu-item[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.search[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n    width:300px;\r\n    height:25px;\r\n    border: none;\r\n    border-radius: 7px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n    margin:7px;\r\n}\r\n\r\n.left-part[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    color: #f2f2f2;\r\n    padding: 5px 10px;\r\n    margin-right: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n}\r\n\r\nsearch_part[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin: 5px;\r\n    margin-left: 77%;\r\n    border: 1px solid rgb(170, 165, 165);\r\n    border-radius: 7px;\r\n}\r\n\r\n#search[_ngcontent-%COMP%] {\r\n    float:right;\r\n    font-size: 14px;\r\n    align-self: center;\r\n    text-align: left;\r\n    margin-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    border: none;\r\n}\r\n\r\n#search_btn[_ngcontent-%COMP%] {\r\n    float:right;\r\n    border-left: none;\r\n    cursor: pointer;\r\n    align-self: center;\r\n    border: none;\r\n    background-color: #00000012;\r\n    border-radius: 7px;\r\n    background: transparent;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    border: none;\r\n    border-radius: 7px;\r\n    background: transparent;\r\n}\r\n\r\n#search_icon[_ngcontent-%COMP%] {\r\n    max-width: 15px;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n.cart-value[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    margin-left: 5px;\r\n    color: #404040;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWMsRUFBRSxhQUFhO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwyQ0FBMkM7O0FBQzNDO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImhlYWRlci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZsaXN0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvOyB3aWR0aDogMTUyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MDE2NjY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdHlsaW5nIG5hdmxpc3QgYW5jaG9yIGVsZW1lbnQgKi9cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiYSgyOSwgMjksIDI5LCAwLjc1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2JhKDI5LCAyOSwgMjksIDAuNzUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4ucmlnaHQtcGFydCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogaG92ZXIgZWZmZWN0IG9mIG5hdmxpc3QgYW5jaG9yIGVsZW1lbnQgKi9cclxuLm1lbnUtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHN0eWxpbmcgc2VhcmNoIGJhciAqL1xyXG4uc2VhcmNoIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgbWFyZ2luOjdweDtcclxufVxyXG5cclxuLmxlZnQtcGFydCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnNlYXJjaCBidXR0b257XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG5zZWFyY2hfcGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc3JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNzAsIDE2NSwgMTY1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNzZWFyY2hfYnRuIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc2VhcmNoX2ljb24ge1xyXG4gICAgbWF4LXdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4jbG9nb3V0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcnQtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "MSZs":
/*!******************************************************!*\
  !*** ./src/app/users/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/register-form-control-name.enum */ "Aptu");
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function RegisterComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.userService.getFormControlErrorMessage(ctx_r0.emailFormControl), " ");
} }
function RegisterComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.userService.getFormControlErrorMessage(ctx_r1.nameFormControl), " ");
} }
function RegisterComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.userService.getFormControlErrorMessage(ctx_r2.passwordFormControl), " ");
} }
class RegisterComponent {
    constructor(formBuilder, userService, router) {
        this.userService = userService;
        this.router = router;
        this.email = '';
        this.name = '';
        this.password = '';
        this.submitButtonText = 'Register';
        this.registerForm = formBuilder.group({
            [_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Email]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            [_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Password]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            [_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Name]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]]
        });
        this.emailFormControl = this.registerForm.get(_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Email);
        this.nameFormControl = this.registerForm.get(_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Name);
        this.passwordFormControl = this.registerForm.get(_models_register_form_control_name_enum__WEBPACK_IMPORTED_MODULE_1__["RegisterFormControlName"].Password);
    }
    // constructor(private userService: UserService, private router: Router) { }
    onFormSubmit(name, email, password) {
        // const email: string = this.emailFormControl.value;
        // const password: string = this.passwordFormControl.value;
        // const name: string = this.nameFormControl.value;
        name.trim();
        email.trim();
        password.trim();
        if (name === '' || email === '' || password === '') {
            alert('Please, fill in all fields');
            return;
        }
        //very basic regex for the email
        if (!email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
            alert('Invalid email');
            return;
        }
        if (password.length < 6 || !password.includes('.') && !password.includes('!')) {
            alert('Weak password');
            return;
        }
        this.userService.register(name, email, password)
            .subscribe(result => {
            if (result) {
                this.userService.setSession(result);
                this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_2__["Route"].Workspaces]);
            }
            else {
                alert(result.message);
            }
        }, error => {
            if (error.error.result !== undefined) {
                alert(error.error.message);
            }
            else {
                alert(error.error.message);
            }
        }, () => { });
        // this.userService.register(email, password, name)
        //     .subscribe(() => {
        //         this.router.navigate([Route.Workspaces]);
        //     });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 12, vars: 12, consts: [[1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "type", "email", "placeholder", "Email", 3, "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "placeholder", "Name", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", 3, "formControl", "ngModel", "ngModelChange"], ["mat-button", "", "type", "submit", 1, "submit-button", 3, "disabled", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.registerForm.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_2_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RegisterComponent_mat_error_3_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RegisterComponent_mat_error_6_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegisterComponent_mat_error_9_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_10_listener() { return ctx.onFormSubmit(ctx.name, ctx.email, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.nameFormControl)("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.passwordFormControl)("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.passwordFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.submitButtonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["[_nghost-%COMP%] {\r\n    width: 50%;\r\n    height: 60vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #fafafa;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 5px 10px 18px rgb(84 110 134);\r\n    margin-top: 8rem;\r\n}\r\n\r\n\r\n\r\n.form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin : 0 auto;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: 0.5rem;\r\n    width: 100%;\r\n    background-color: #fafafa;\r\n}\r\n\r\n\r\n\r\nmat-error[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: rgb(215 159 251);\r\n    border: 0.3px solid;\r\n    border-color: rgba(158,23,246,1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  background-image: radial-gradient(100% 100% at 100% 0, rgba(158,23,246,1) 0, rgba(223,207,235,1));\r\n  border: 0;\r\n  border-radius: 6px;\r\n  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus {\r\n  box-shadow:  0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(158,23,246,1) 0 -3px 0 inset;\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(158,23,246,1) 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n\r\n\r\n.submit-button[_ngcontent-%COMP%]:active {\r\n  box-shadow: rgba(158,23,246,1) 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}\r\n\r\n\r\n\r\n.matt-button-wrapper[_ngcontent-%COMP%] {\r\n    color: rgba(158,23,246,1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7Ozs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7Ozs7QUFHQSxRQUFROzs7O0FBQ1I7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsaUdBQWlHO0VBQ2pHLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsb0hBQW9IO0VBQ3BILHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxzQkFBaUI7R0FBakIscUJBQWlCO09BQWpCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UsdUlBQXVJO0FBQ3pJOzs7O0FBRUE7RUFDRSxtSEFBbUg7RUFDbkgsMkJBQTJCO0FBQzdCOzs7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsMEJBQTBCO0FBQzVCOzs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoidXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggcmdiKDg0IDExMCAxMzQpO1xyXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4gOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxubWF0LWVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1IDE1OSAyNTEpO1xyXG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNTgsMjMsMjQ2LDEpO1xyXG59XHJcblxyXG5cclxuLyogQ1NTICovXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDEwMCUgMTAwJSBhdCAxMDAlIDAsIHJnYmEoMTU4LDIzLDI0NiwxKSAwLCByZ2JhKDIyMywyMDcsMjM1LDEpKTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgLjQpIDAgMnB4IDRweCxyZ2JhKDQ1LCAzNSwgNjYsIC4zKSAwIDdweCAxM3B4IC0zcHgscmdiYSg1OCwgNjUsIDExMSwgLjUpIDAgLTNweCAwIGluc2V0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCIsbW9ub3NwYWNlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6ICAwIDAgMCAxLjVweCBpbnNldCwgcmdiYSg0NSwgMzUsIDY2LCAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIC4zKSAwIDdweCAxM3B4IC0zcHgsIHJnYmEoMTU4LDIzLDI0NiwxKSAwIC0zcHggMCBpbnNldDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAuMykgMCA3cHggMTNweCAtM3B4LCByZ2JhKDE1OCwyMywyNDYsMSkgMCAtM3B4IDAgaW5zZXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMTU4LDIzLDI0NiwxKSAwIDNweCA3cHggaW5zZXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbi5tYXR0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDE1OCwyMywyNDYsMSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(_route, _state) {
        const token = localStorage.getItem('id_token');
        if (token === null || this.tokenExpired(token)) {
            this.router.navigateByUrl('login');
            return false;
        }
        return true;
    }
    tokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P2QX":
/*!****************************************************!*\
  !*** ./src/app/workspaces/workspaces.component.ts ***!
  \****************************************************/
/*! exports provided: WorkspacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacesComponent", function() { return WorkspacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function WorkspacesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspacesComponent_div_2_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const data_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addItems(data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ADD TO CART");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "..//..//assets/", data_r1.imgUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.status === "IN CART" ? data_r1.status : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, data_r1.price), "");
} }
//import { SharedServiceService } from '../shared-service.service';
class WorkspacesComponent {
    constructor() {
        this.sampleData = [{
                name: 'StartUp',
                imgUrl: 'startup.png',
                description: '1-2 people',
                price: 99.00,
                status: ''
            },
            {
                name: 'Business',
                imgUrl: 'business.png',
                description: 'Up to 5 people',
                price: 299.00,
                status: ''
            },
            {
                name: 'Enterprise',
                imgUrl: 'enterprise.png',
                description: 'Up to 10 people',
                price: 499.00,
                status: ''
            }];
    }
    // constructor(private sharedSerivce: SharedServiceService) { }
    ngOnInit() {
    }
    addItems(data) {
        // eslint-disable-next-line no-param-reassign
        data.status = 'IN CART'; // appending a new key status
        //  this.sharedSerivce.setItemData(data);
    }
}
WorkspacesComponent.ɵfac = function WorkspacesComponent_Factory(t) { return new (t || WorkspacesComponent)(); };
WorkspacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspacesComponent, selectors: [["app-workspaces"]], decls: 3, vars: 1, consts: [[1, "gog_home_game_content"], [1, "gog_cards_wrapper"], ["class", "gog_cards", 4, "ngFor", "ngForOf"], [1, "gog_cards"], [1, "gog_cards_details"], [3, "src"], [1, "add", 3, "click"], ["id", "price-tag"]], template: function WorkspacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkspacesComponent_div_2_Template, 13, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sampleData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".gog_content_body[_ngcontent-%COMP%]{\r\n    padding: 0 100px !important;\r\n}\r\n\r\n.gog_home_game_content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 100px;\r\n }\r\n\r\n.gog_cards_wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin:  50px 0px;\r\n    justify-content: space-around;\r\n}\r\n\r\n.gog_cards[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    min-height: 350px;\r\n    background: linear-gradient(200deg, rgb(205, 167, 231) 0%, rgb(177, 117, 218) 100%);;\r\n    box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n    bottom: 10px;\r\n    text-align: right;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: right;\r\n    color: rgba(27, 27, 27, 0.75);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: right;\r\n    color: rgba(27, 27, 27, 0.75);\r\n    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.25);\r\n    border: solid 1px rgba(0, 0, 0, 0.25);\r\n    padding: 2px 8px;\r\n    margin: 0px 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #bc21db;\r\n    border: solid 1px rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n\r\n.gog_cards_details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n    color: rgba(27, 27, 27, 0.75);\r\n    font-weight: 700;\r\n    line-height: 1.21;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n}\r\n\r\n.gog_cards[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n   max-width: 95%;\r\n   max-height: 60%;\r\n   height: 100%;\r\n   margin: 5px;\r\n   border: solid 5px rgb(205, 167, 231);\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\nfont-size: 14px;\r\ntext-align: right;\r\nalign-self: center;\r\nfont-style: normal;\r\nfont-weight: 600;\r\ncolor: rgba(27, 27, 27, 0.75);\r\n}\r\n\r\n#price-tag[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtRkFBbUY7SUFDbkYsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwyQ0FBMkM7QUFDL0M7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0dBQ1osY0FBYztHQUNkLGVBQWU7R0FDZixZQUFZO0dBQ1osV0FBVztHQUNYLG9DQUFvQztBQUN2Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoid29ya3NwYWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5nb2dfY29udGVudF9ib2R5e1xyXG4gICAgcGFkZGluZzogMCAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ29nX2hvbWVfZ2FtZV9jb250ZW50ID4gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gfVxyXG5cclxuLmdvZ19jYXJkc193cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogIDUwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmdvZ19jYXJkc3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwMGRlZywgcmdiKDIwNSwgMTY3LCAyMzEpIDAlLCByZ2IoMTc3LCAxMTcsIDIxOCkgMTAwJSk7O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uZ29nX2NhcmRzX2RldGFpbHMgPiBkaXYgPiBwe1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbn1cclxuXHJcbi5nb2dfY2FyZHNfZGV0YWlscyA+IGRpdiA+IHNwYW57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdvZ19jYXJkc19kZXRhaWxzID4gZGl2ID4gc3Bhbjpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjMjFkYjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLmdvZ19jYXJkc19kZXRhaWxze1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5nb2dfY2FyZHNfZGV0YWlscyA+IHB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjc1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdvZ19jYXJkcyA+IGRpdiA+IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXgtd2lkdGg6IDk1JTtcclxuICAgbWF4LWhlaWdodDogNjAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIG1hcmdpbjogNXB4O1xyXG4gICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMjA1LCAxNjcsIDIzMSk7XHJcbn1cclxuXHJcbi5hZGQge1xyXG5mb250LXNpemU6IDE0cHg7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG5hbGlnbi1zZWxmOiBjZW50ZXI7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbn1cclxuXHJcbiNwcmljZS10YWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SFNm":
/*!*******************************!*\
  !*** ./src/app/route.enum.ts ***!
  \*******************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
var Route;
(function (Route) {
    Route["Home"] = "home";
    Route["Login"] = "login";
    Route["Register"] = "register";
    Route["ContinueOrderModal"] = "continue-order-modal";
    Route["Workspaces"] = "workspaces";
    Route["Departments"] = "departments";
    Route["Templates"] = "templates";
    Route["ProfileInfo"] = "profile-info";
})(Route || (Route = {}));


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
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "GhOa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _users_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/register/register.component */ "MSZs");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/login/login.component */ "6F30");
/* harmony import */ var _continue_order_modal_continue_order_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./continue-order-modal/continue-order-modal.component */ "AYad");
/* harmony import */ var _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workspaces/workspaces.component */ "P2QX");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "GhOa");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "F7zS");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./departments/departments.component */ "sy50");
/* harmony import */ var _cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart-dialog/cart-dialog.component */ "85G9");
/* harmony import */ var _templates_templates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/templates.component */ "BsGo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__["Ng2SearchPipeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _users_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _users_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _continue_order_modal_continue_order_modal_component__WEBPACK_IMPORTED_MODULE_13__["ContinueOrderModalComponent"],
        _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_15__["HeaderBarComponent"],
        _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_14__["WorkspacesComponent"],
        _departments_departments_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentsComponent"],
        _templates_templates_component__WEBPACK_IMPORTED_MODULE_19__["TemplatesComponent"],
        _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInfoComponent"],
        _cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CartDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__["Ng2SearchPipeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]] }); })();


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: NO_USER_LOGGED_IN_MESSAGE, TOKEN_LOCAL_STORAGE_KEY, EXPIRES_AT_LOCAL_STORAGE_KEY, USER_NAME_LOCAL_STORAGE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_USER_LOGGED_IN_MESSAGE", function() { return NO_USER_LOGGED_IN_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_LOCAL_STORAGE_KEY", function() { return TOKEN_LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRES_AT_LOCAL_STORAGE_KEY", function() { return EXPIRES_AT_LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NAME_LOCAL_STORAGE_KEY", function() { return USER_NAME_LOCAL_STORAGE_KEY; });
const NO_USER_LOGGED_IN_MESSAGE = 'You are currently not logged in! Login to ...';
const TOKEN_LOCAL_STORAGE_KEY = 'token';
const EXPIRES_AT_LOCAL_STORAGE_KEY = 'expires_at';
const USER_NAME_LOCAL_STORAGE_KEY = 'user_name';


/***/ }),

/***/ "sy50":
/*!******************************************************!*\
  !*** ./src/app/departments/departments.component.ts ***!
  \******************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.enum */ "SFNm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DepartmentsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.navigateToTemplatesPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_2_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.navigateToTemplatesPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_2_Template_li_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.navigateToTemplatesPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "..//..//assets/images/", data_r1.imgUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.firstCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.secondCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.thirdCategory, " ");
} }
//import { SharedServiceService } from '../shared-service.service';
class DepartmentsComponent {
    // constructor(private sharedSerivce: SharedServiceService) { }
    constructor(router) {
        this.router = router;
        this.sampleData = [{
                name: 'IT Department',
                imgUrl: 'it_dept.png',
                firstCategory: 'Project management',
                secondCategory: 'Team',
                thirdCategory: 'Technical documentation'
            },
            {
                name: 'HR Department',
                imgUrl: 'hr.png',
                firstCategory: 'Recruitment',
                secondCategory: 'Skill Training',
                thirdCategory: 'Meetings'
            },
            {
                name: 'Marketing Department',
                imgUrl: 'marketing.jpg',
                firstCategory: 'Promote',
                secondCategory: 'Researching',
                thirdCategory: 'Meetings'
            }];
    }
    navigateToTemplatesPage() {
        this.router.navigate([_route_enum__WEBPACK_IMPORTED_MODULE_0__["Route"].Templates]);
    }
}
DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-workspaces"]], decls: 3, vars: 1, consts: [[1, "gog_home_game_content"], [1, "gog_cards_wrapper"], ["class", "gog_cards", 4, "ngFor", "ngForOf"], [1, "gog_cards"], [1, "gog_cards_details"], [3, "src"], [1, "wrap-cat-btns"], [1, "cat-item"], ["type", "button", 3, "click"], [1, "cat-item", 3, "click"], ["type", "button"]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DepartmentsComponent_div_2_Template, 15, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sampleData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".gog_content_body[_ngcontent-%COMP%]{\r\n   padding: 0 100px !important;\r\n}\r\n.gog_home_game_content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   max-width: 100px;\r\n}\r\n.gog_cards_wrapper[_ngcontent-%COMP%]{\r\n   display: flex;\r\n   margin:  50px 0px;\r\n   justify-content: space-around;\r\n}\r\n.gog_cards[_ngcontent-%COMP%]{\r\n   width: 20%;\r\n   display: flex;\r\n   position: relative;\r\n   flex-direction: column;\r\n   min-height: 300px;\r\n   background: linear-gradient(200deg, rgb(205, 167, 231) 0%, rgb(161, 71, 221) 100%);\r\n   box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.gog_cards_details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n   position: absolute;\r\n   bottom: 10px;\r\n   right: 5px;\r\n   text-align: center;\r\n}\r\n.gog_cards_details[_ngcontent-%COMP%]{\r\n   margin: 10px;\r\n}\r\n.gog_cards_details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n   font-size: 20px;\r\n   color: rgba(27, 27, 27, 0.75);\r\n   font-weight: 700;\r\n   line-height: 1.21;\r\n   letter-spacing: normal;\r\n   text-align: center;\r\n}\r\n.gog_cards[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   max-width: 80%;\r\n   max-height: 60%;\r\n   align-self: center;\r\n   height: 100%;\r\n   border: solid 5px rgb(205, 167, 231);\r\n}\r\n.wrap-cat-btns[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   padding: 10px;\r\n   justify-content: space-between;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n   margin: 5px;\r\n   font-size: 18px;\r\n   font-weight: 600;\r\n   cursor: pointer;\r\n   color: rgba(27, 27, 27, 0.75);\r\n}\r\n.cat-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n   font-size: 18px;\r\n   font-weight: 600;\r\n   cursor: pointer;\r\n   border: none;\r\n   background-color: transparent;\r\n   color: rgba(27, 27, 27, 0.75);\r\n   box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.25);\r\n   border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0dBQ0csMkJBQTJCO0FBQzlCO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsZ0JBQWdCO0FBQ25CO0FBRUE7R0FDRyxhQUFhO0dBQ2IsaUJBQWlCO0dBQ2pCLDZCQUE2QjtBQUNoQztBQUVBO0dBQ0csVUFBVTtHQUNWLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsc0JBQXNCO0dBQ3RCLGlCQUFpQjtHQUNqQixrRkFBa0Y7R0FDbEYsNkNBQTZDO0FBQ2hEO0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLFVBQVU7R0FDVixrQkFBa0I7QUFDckI7QUFFQTtHQUNHLFlBQVk7QUFDZjtBQUVBO0dBQ0csZUFBZTtHQUNmLDZCQUE2QjtHQUM3QixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0QixrQkFBa0I7QUFDckI7QUFFQTtHQUNHLFdBQVc7R0FDWCxjQUFjO0dBQ2QsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osb0NBQW9DO0FBQ3ZDO0FBRUE7R0FDRyxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLG1CQUFtQjtHQUNuQixhQUFhO0dBQ2IsOEJBQThCO0FBQ2pDO0FBRUE7R0FDRyxXQUFXO0dBQ1gsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2YsNkJBQTZCO0FBQ2hDO0FBRUE7R0FDRyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixZQUFZO0dBQ1osNkJBQTZCO0dBQzdCLDZCQUE2QjtHQUM3Qiw2Q0FBNkM7R0FDN0Msa0JBQWtCO0FBQ3JCIiwiZmlsZSI6ImRlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmdvZ19jb250ZW50X2JvZHl7XHJcbiAgIHBhZGRpbmc6IDAgMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZ29nX2hvbWVfZ2FtZV9jb250ZW50ID4gaW1ne1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdvZ19jYXJkc193cmFwcGVye1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBtYXJnaW46ICA1MHB4IDBweDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5nb2dfY2FyZHN7XHJcbiAgIHdpZHRoOiAyMCU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDBkZWcsIHJnYigyMDUsIDE2NywgMjMxKSAwJSwgcmdiKDE2MSwgNzEsIDIyMSkgMTAwJSk7XHJcbiAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmdvZ19jYXJkc19kZXRhaWxzID4gZGl2e1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvdHRvbTogMTBweDtcclxuICAgcmlnaHQ6IDVweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ29nX2NhcmRzX2RldGFpbHN7XHJcbiAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmdvZ19jYXJkc19kZXRhaWxzID4gcHtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjc1KTtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgbGluZS1oZWlnaHQ6IDEuMjE7XHJcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdvZ19jYXJkcyA+IGltZ3tcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1heC13aWR0aDogODAlO1xyXG4gICBtYXgtaGVpZ2h0OiA2MCU7XHJcbiAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBib3JkZXI6IHNvbGlkIDVweCByZ2IoMjA1LCAxNjcsIDIzMSk7XHJcbn1cclxuXHJcbi53cmFwLWNhdC1idG5zIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgcGFkZGluZzogMTBweDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5saSB7XHJcbiAgIG1hcmdpbjogNXB4O1xyXG4gICBmb250LXNpemU6IDE4cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC43NSk7XHJcbn1cclxuXHJcbi5jYXQtaXRlbSBidXR0b257XHJcbiAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICBjb2xvcjogcmdiYSgyNywgMjcsIDI3LCAwLjc1KTtcclxuICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/login/login.component */ "6F30");
/* harmony import */ var _users_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/register/register.component */ "MSZs");
/* harmony import */ var _continue_order_modal_continue_order_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continue-order-modal/continue-order-modal.component */ "AYad");
/* harmony import */ var _route_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route.enum */ "SFNm");
/* harmony import */ var _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workspaces/workspaces.component */ "P2QX");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "F7zS");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./departments/departments.component */ "sy50");
/* harmony import */ var _templates_templates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/templates.component */ "BsGo");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].Login,
        component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].Register,
        component: _users_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].Workspaces,
        component: _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_6__["WorkspacesComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].ProfileInfo,
        component: _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_7__["ProfileInfoComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].Departments,
        component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentsComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].Templates,
        component: _templates_templates_component__WEBPACK_IMPORTED_MODULE_9__["TemplatesComponent"]
    },
    {
        path: _route_enum__WEBPACK_IMPORTED_MODULE_5__["Route"].ContinueOrderModal,
        component: _continue_order_modal_continue_order_modal_component__WEBPACK_IMPORTED_MODULE_4__["ContinueOrderModalComponent"]
    },
    {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zLM3":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "l207");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    // constructor(private readonly httpClient: HttpClient) {
    // }
    // login(email: string, password: string): Observable<User> {
    //     const loginUserObservable = this.httpClient.post('/user/login', { email, password }) as Observable<User>;
    //     return loginUserObservable
    //         .pipe(
    //             tap((user: User) => this.saveCurrentUser(user)),
    //             take(1)
    //         );
    // }
    // register(email: string, password: string, name: string): Observable<User> {
    //     const registerUserObservable = this.httpClient.post(environment.serveUrl + '/user', {
    //         email,
    //         password,
    //         name
    //     }) as Observable<User>;
    //     return registerUserObservable
    //         .pipe(
    //             tap((user: User) => this.saveCurrentUser(user)),
    //             take(1)
    //         );
    // }
    constructor(http) {
        this.http = http;
        this.userChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.userChanged$ = this.userChangedSource.asObservable();
    }
    login(email, password) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serveUrl + "/user/login", {
            email,
            password
        });
    }
    register(name, email, password) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serveUrl + "/user", {
            name: name,
            email: email,
            password: password
        });
    }
    isLoggedIn() {
        const expiration = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["EXPIRES_AT_LOCAL_STORAGE_KEY"]);
        if (!expiration) {
            return false;
        }
        const expiresAt = moment__WEBPACK_IMPORTED_MODULE_1__(JSON.parse(expiration));
        return moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(expiresAt);
    }
    logOut() {
        // localStorage.removeItem(EXPIRES_AT_LOCAL_STORAGE_KEY);
        // localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        // localStorage.removeItem(USER_NAME_LOCAL_STORAGE_KEY);
        // this.userChangedSource.next(false);
    }
    getFormControlErrorMessage(formControl) {
        if (formControl.hasError('required')) {
            return 'You must enter a value';
        }
        if (formControl.hasError('minlength')) {
            return 'Field must contain at least 8 symbols';
        }
        return '';
    }
    saveCurrentUser(user) {
        // const expiresAt: moment.Moment = moment().add(user.expiresIn, 'second');
        // localStorage.setItem(EXPIRES_AT_LOCAL_STORAGE_KEY, JSON.stringify(expiresAt.valueOf()));
        // localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, user.token);
        // localStorage.setItem(USER_NAME_LOCAL_STORAGE_KEY, user.name);
        // this.userChangedSource.next(true);
    }
    load() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serveUrl + "/user");
    }
    setSession(authResult) {
        localStorage.setItem('id_token', authResult.token);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map