/*
  Data type
  - Tuple
  --- is another sort of array type
  --- we knows exactly how many it contains
  --- we knows which types it contains at specific positions
*/

let artical: [number , String, Boolean] = [101, "Main Title", true];

// artical = [202, "Title one", false, ali]
// artical.push("test");

const [id, title, status] = artical;

console.log(artical);

console.log(id);
console.log(title);
console.log(status);


