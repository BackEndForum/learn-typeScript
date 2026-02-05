/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function cont(...nub:number[]) :number {
  let x = 0;
  nub.map((y) => x+=y);
  // nub.forEach((y) => x+=y);
  // for (let i = 0; i < nub.length; i++) {
  //   x += nub[i]!; // Object is possibly 'undefined'.
  // }
  return x;
}

console.log(cont(1, 3, 4, 5, 2, +true, 1.50, 3.63)); // 21.13
