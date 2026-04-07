/*
  Data type
  - Literal types
*/

type result = 1 | -1 | 0;

const compile = function (num1: Number, num2: Number) : result {
  if (num1 === num2) {
    return 1;
  } else if (num1 > num2) {
    return 0;
  } else {
    return -1;
  }
}

// const test1: result = 3;
// const test2: result = +true;
const test3: result = 1;

console.log(compile(20, 30));
console.log(test3);

