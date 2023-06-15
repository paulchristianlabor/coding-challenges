/* Sort Number 32 , 33 , 11 , 23 , 8 */

/* My Code Starts Here Below */

var numbers = [32, 33, 11, 23, 8];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
