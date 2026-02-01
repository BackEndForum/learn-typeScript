"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let showMessage = true;
function getSalary(name, id, salary) {
    let x = "test";
    if (showMessage) {
        return `your id is ${id}, hello ${name}, your salary is ${salary}`;
    }
    return "No salary available";
}
console.log(getSalary("Alice", 101, 50000));
//# sourceMappingURL=test.js.map