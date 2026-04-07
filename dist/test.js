"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compile = function (num1, num2) {
    if (num1 === num2) {
        return 1;
    }
    else if (num1 > num2) {
        return 0;
    }
    else {
        return -1;
    }
};
const test = 1;
console.log(compile(20, 30));
console.log(test);
//# sourceMappingURL=test.js.map