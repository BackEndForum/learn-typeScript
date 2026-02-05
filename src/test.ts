/*
  Function
  - Type Annotations With Anonymous And Arrow Function
*/

const count = function(number1:number, number2:number) :number {
  return number1 + number2;
}

const arowFun = (x:number, y:number) :number => {return x + y};

const arowFunTwo = (x: number, y: number) : number => x + y;

console.log(count(3, 7));
console.log(arowFun(8, 10));
console.log(arowFunTwo(9, 7));



