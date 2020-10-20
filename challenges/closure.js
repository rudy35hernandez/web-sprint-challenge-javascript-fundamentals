// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable 
internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*The reason it can access internal is because the nested function is in the lexical environment that 'internal' 
is in. myFunction starts at 128 and doesnt end until line 136. The reason myFunction has access to external is 
because the variable external is a universal variable.*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that 
number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let counter = 0;
  for(let i = 1; i <= num; i++){
    counter += i;
  }
  return counter;
}

console.log(summation(4));