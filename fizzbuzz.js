// Write a function that prints the numbers from 1 to n. 
// But for multiples of 3, print "Fizz" instead of the number, 
// and for the multiples of 5, print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// The function should take an integer n as its parameter.

function fizzBuzz(n) {
    for (let i=1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
};

fizzBuzz(15)

// Time: O(n)
// Space: 0(1)