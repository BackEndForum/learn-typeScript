/*
  Data type
  - type Alias
*/

type bo = boolean;
type txt = string | Number;
let x: bo = true
x = false
// x = 2; // type 'number' is not assignable to type 'boolean'

let y: txt = "mustafa";
y = 10;
y = +true;

console.log(x);
console.log(y);
