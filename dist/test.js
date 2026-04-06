"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHello = function (lis) {
    return `the fist is ${lis.One}, and the second is ${lis.Two}, the third is ${lis.Thr = '40'}, and in the end is ${lis.yx || "Last"}`;
};
const sayWellome = function (show) {
    console.log(`hello ${show.One}`);
    console.log(`welcome ${show.Two}`);
    console.log(`yello ${show.Thr || "UN"}`);
};
console.log(sayHello({ One: "Mustafa", Two: "Ali", Thr: 'test', yx: +true }));
sayWellome({ One: "Omar", Two: "Noor" });
//# sourceMappingURL=test.js.map