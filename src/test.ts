/*
  type annotations with functions

  - noImplicitAny
  --- raise error on expressions and declarations with an implied 'any' type

  - noImplicitReturns
  --- will check all code paths in a function to ensure they return a value

  - noUnusedLocals
  --- report Errors on unused Local variables

  - noUnusedParameters
  --- report Errors on unused parameters in functions
*/

let showMessage: boolean = true;

function getSalary(name:string, id:number, salary:number) : boolean | string {
  let x = "test";
  if (showMessage) {
    return `your id is ${id}, hello ${name}, your salary is ${salary}`;
  }
  return "No salary available";
}
console.log(getSalary("Alice", 101, 50000));