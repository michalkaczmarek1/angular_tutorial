"use strict";
exports.__esModule = true;
function Log(info) {
    if (info === void 0) { info = ""; }
    return function (target, propertyKey, descriptor) {
        console.log("Log decorator running; Target: " + target + ", info: " + info);
    };
}
exports.Log = Log;
function LogClass(info) {
    return function (constructor) {
        console.log("LogClass decorator running; Class: " + constructor + ", info: " + info);
    };
}
exports.LogClass = LogClass;
