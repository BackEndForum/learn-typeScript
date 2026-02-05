"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cont(...nub) {
    let x = 0;
    nub.map((y) => x += y);
    return x;
}
console.log(cont(1, 3, 4, 5, 2, +true, 1.50, 3.63));
//# sourceMappingURL=test.js.map