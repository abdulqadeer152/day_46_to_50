/////// Day 46
//// Question # 136

import { rejects } from "assert";
import { error } from "console";
import { resolve } from "path";
import { start } from "repl";

for (let i = 1; i<= 5; i++ ){
    console.log(`Iteration ${i}, i valve is: i`);
    
}


////Question # 137
// Demonstrates using a try-catch block to handle errors

try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
  } catch (error) {
    //console.log(error.message); // Logs the error message
  }



  ////// Question # 138

  // Sample code snippet for setting a breakpoint

  console.log("Befor BreakPoint");

  console.log(
     "This line has a breakpoint set on it in the browser's developer tools"
    
  );

  console.log("After BreakPoint");
  

  /////// Day 47

  //// Questiion # 139

  let count = 5;
  if(count > 0){
    console.log("Count is greater then 0");
    
  };

function add(a:number , b:number){
  return a + b
}


//// Question # 140

// Attempting to use a reserved word as a variable name
// let if = 5; // This line would cause a syntax error

console.log(
  "Using a reserved word as a variable name causes a syntax error in JavaScript."
);
// It's important to avoid using reserved words as identifiers to prevent these errors.



//// Question # 141

async function fetchData(): Promise<void> {
  // Assuming fetchSomething returns a Promise
  const data: any = await fetchSomething();
  console.log(data);
  // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);

// Assuming fetchSomething is defined as an async function
async function fetchSomething(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched data"), 1000);
  });
}

// Call fetchData to see the result
fetchData();


//// Question # 142

// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise <string>((resolve) =>{
  setTimeout(() => {
    resolve ("Hallow World");
  }, 2000);
})

helloPromise.then((message) => console.log(message)
);


/////// Question # 143

// Creates a Promise that either resolves or rejects based on a condition

 // Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject(new Error("Failure"));
  }
});

conditionalPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));


  //// Question  # 144

  // Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise <string>((resolve) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3]).then((valve) =>{
  console.log(valve);
  
})


/// Question # 145

// This function accepts a callback function and invokes it with given arguments
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2); // Invokes the callback with the specified arguments
}

// Example callback function that adds two numbers
const adde = (a: number, b: number) => {
  console.log(a + b); // Outputs the sum of a and b
};

executeCallback(adde, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.


//// Question # 146
// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filternumber : number[] = numbers.filter((number) => number > 5);

console.log(filternumber);


//// Question # 147

// Function that uses a callback pattern, including error handling
function fetcheData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulating an error condition
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  // Simulate fetching data with a chance of error
  if (Math.random() > 0.5) {
    callback(null, data); // No error, data is fetched successfully
  } else {
    callback(error); // Passes error to the callback
  }
}

// Using the fetchData function with error handling in the callback
fetcheData((error, data) => {
  if (error) {
    console.error(error.message); // Handles the error
  } else {
    console.log(data); // Processes the data
  }
});
// Demonstrates a callback pattern where errors are handled gracefully.


//// Day 50

//// Question # 148

setTimeout(() => {
  console.log("This message is shown after a 2-second delay.");
  
}, 2000);

//// Question # 149

console.log("start");

setTimeout(() => {
  console.log("Exclutive");
  
}, 0);

console.log("End");

//// Question # 150

// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
