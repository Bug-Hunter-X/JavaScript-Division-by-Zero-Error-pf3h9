function myFunc(a, b) {
  if (b === 0) {
    return 0; // Handle division by zero
  } else if (a === 0) {
    return 0; // Handle case where a is zero
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Returns 0
console.log(myFunc(10, 2)); // Returns 5