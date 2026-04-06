/*
  Data type
  - Advanced type Alias
*/

type Btns = {
  One: String,
  Two: String,
  Thr?: String,
};

type x = Btns & {
  yx?: Number,
};

const sayHello = function(lis: x) : String {
  return `the fist is ${lis.One}, and the second is ${lis.Two}, the third is ${lis.Thr = '40'}, and in the end is ${lis.yx || "Last"}`;
};

const sayWellome = function(show: Btns) : void {
  console.log(`hello ${show.One}`);
  console.log(`welcome ${show.Two}`);
  console.log(`yello ${show.Thr || "UN"}`);
  
}

console.log(sayHello({One: "Mustafa", Two: "Ali", Thr: 'test', yx: +true }));
sayWellome({One: "Omar", Two: "Noor"})
