// File: List0147.ts
// Ref: Apress Pro TypeScript
// Listing 1-47. The in property
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Display = (function () {
    function Display() {
        this.name = '';
    }
    return Display;
}());
var Television = (function (_super) {
    __extends(Television, _super);
    function Television() {
        _super.apply(this, arguments);
    }
    return Television;
}(Display));
var Hifi = (function () {
    function Hifi() {
    }
    return Hifi;
}());
var display = new Display();
var television = new Television();
var hifi = new Hifi();
console.log('name' in display);
console.log('name' in television);
console.log('name' in hifi);
