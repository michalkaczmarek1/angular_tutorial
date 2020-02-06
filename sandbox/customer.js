"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var decorators_1 = require("./decorators");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        setTimeout(function () {
            console.log(this.name);
        }, 500);
    }
    Person.prototype.welcome = function () {
        return "Welcome, " + this.name + ", " + this.age;
    };
    Person.prototype.isAult = function () {
        if (this.age >= 18) {
            return true;
        }
        else {
            return false;
        }
    };
    Person.prototype.talk = function () {
        return 'Hello';
    };
    __decorate([
        decorators_1.Log()
    ], Person.prototype, "welcome");
    Person = __decorate([
        decorators_1.LogClass("info")
    ], Person);
    return Person;
}());
exports.Person = Person;
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, age, advisor) {
        var _this = _super.call(this, name, age) || this;
        _this.advisor = advisor;
        return _this;
    }
    Customer.prototype.welcome = function () {
        return "Good morning " + this.name;
    };
    return Customer;
}(Person));
exports.Customer = Customer;
exports.persons = ["Michał", "Jan", "Maria"];
function welcome() {
    return "Witaj";
}
exports.welcome = welcome;
