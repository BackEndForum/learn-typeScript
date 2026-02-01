let myArray: (string | number | boolean | number[] | string[] | (string | number | boolean)[]| {name: string; age: number} | {name: string; age: number; isMarried: boolean})[] = ["html", "css", "js", 42, true, [1, 3, 5], ["a", "b", "c"], ["ali", "vali", 1456, false], {name: "ali", age: 25}, {name: "zahra", age: 30, isMarried: true}];
/*
let myArray: (string | number | boolean | (string | number | boolean)[] | {
  name: string;
  age: number;
  isMarried?: never;
} | {
  name: string;
  age: number;
  isMarried: boolean;
})[]
*/