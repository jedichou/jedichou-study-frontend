// File: List0114.ts
// Ref: Apress Pro TypeScript
// Listing 1-14. Increment and decrement of enumerations
var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
    Size[Size["XL"] = 3] = "XL";
})(Size || (Size = {}));
var size = Size.S;
++size;
console.log(Size[size]);
var size = Size.XL;
--size;
console.log(Size[size]);
var size = Size.XL;
++size;
console.log(Size[size]);
