// Array Manipulations

/* 
Adding and Removing elements at the end of an array
    - .push(): add element to the end of an array
    - .pop(): remove the last element of an array
*/

let arr = [1,2,3];
arr.push(4); // [ 1, 2, 3, 4 ]
arr.pop(); // [ 1, 2, 3 ]

/* 
Adding and Removing elements at the beginning of an array
    - .unshift(): add element to the beginning of an array
    - .shift(): remove the first element of an array
*/

let arr1 = [1,2,3];
arr1.unshift(0); // [ 0, 1, 2, 3 ]
arr1.shift(); // [ 1, 2, 3 ]

/* 
Slice and Splice an array
    - .slice(): creates a new array by slicing a portion of it, this does not modify the original array
    - .splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
*/

let arr2 = [1,2,3,4,5];
let slicedArr = arr2.slice(1,3); // [ 2, 3 ], you have to save it to an element to view in the console

let arr3 = [1,2,3,4,];
arr3.splice(1,2,'a','b');

/* 
Finding elements of an array
    - .indexOf(): returns the first occurrence of a specified element, returns where it is on the array
    - .lastIndexOf(): returns the last occurrence of a specified element, returns where it is on the array
*/

let arr4 = [1,2,3,2,1];
let indexOf = arr4.indexOf(2); // 1
let lastIndexOf = arr4.lastIndexOf(2); // 3

/* 
Sorting and Reversing an array
    - .sort(): sorts the elements of an array
    - .reverse(): reverses the order of elements in an array
*/

let arr5 = [3,1,4,1,5];
let sort = arr5.sort(); // [ 1, 1, 3, 4, 5 ]                         
let reverse = arr5.reverse(); // [ 5, 4, 3, 1, 1 ]

/* 
Mapping, Filtering, and Reducing an array
    - .map(): creates a new array by applying a function to each element
    - .filter(): creates a new array with elements that satisfy a condition
    - .reduce(): combines all elements of the array into a single output
*/

let arr6 = [1,2,3];
let squared = arr6.map(x => x * x); // [ 1, 4, 9 ]

let arr7 = [1,2,3,4];
let even = arr7.filter(x => x % 2 === 0); // [ 2, 4 ]

let arr8 = [1,2,3,4];
let sum = arr8.reduce((acc,val) => acc + val, 0); // 10

/* 
Merging an array
    - .concat(): combine multiple arrays into one
*/

let arr9 = [1,2];
let arr10= [3,4];
let mergedArrays = arr9.concat(arr10); // [ 1, 2, 3, 4 ]