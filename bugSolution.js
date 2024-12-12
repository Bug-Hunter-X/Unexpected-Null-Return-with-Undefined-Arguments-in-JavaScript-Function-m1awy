function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Return 0 for null or undefined, or handle appropriately
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // 1
console.log(foo(null, 2)); // 2
console.log(foo(undefined, 2)); // 2
console.log(foo(1, undefined)); // 1