function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior if a or b are undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // null
console.log(foo(null, 2)); // null
console.log(foo(undefined, 2)); //null //Unexpected behavior if a or b are undefined
console.log(foo(1, undefined)); //null //Unexpected behavior if a or b are undefined