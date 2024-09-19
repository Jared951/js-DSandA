/*
Accessing Characters 
    - You can find where a character is at in a string with charAt() or braket notation
*/ 

let str = "hello";
console.log(str[0]); // h
console.log(str.charAt(0)); // h

/*
String Length   
    - Using .length on a string will return the number of characters in that string
*/ 

let str2 = "hello";
console.log(str.length);

/*
Split and Join 
    - .split(): converts a string into an array based on a delimiter
    - .join(): combines an array's elements into a single string
*/ 

let str3 = "a,b,c,d"; // a,b,c,d
let arr = str3.split(",") // [ 'a', ' b', ' c', ' d' ]
let joinedStr = arr.join("-"); // a-b-c-d

/*
Searching Strings
    - .indexOf(): finds the first occurrence of a sub string
    - .includes(): check if a sub string exists within a string
    - .startsWith() and .endsWith() check if the string starts or ends with a specific substring.
*/ 

let str4 = "JavaScript is awesome!";
console.log(str4.indexOf("is"));        // 11
console.log(str4.includes("awesome"));  // true
console.log(str4.startsWith("Java"));   // true
console.log(str4.endsWith("!"));        // true

/*
Slicing Strings
    - .slice(): extracts part of a string
    - .substring(): similar to slice() but does not support negative indicies 
*/ 

let str5 = "abcdef";
let sliced = str5.slice(1,4); // bcd
let substringed = str5.substring(1,4); // bcd

/*
Replacing Strings
    - .replace(): replaces the first occurrence of a substring
    - .replaceAll(): replaces all occurrences of a substring
*/

let str6 = "apple pie";
let replaced = str6.replace("apple", "banana"); // banana pie
let replacedAll = str6.replaceAll("p", "q"); // aqqle qie

/*
Reversing a string
    - You can reverse a string by converting it to an array, reversing the array, and joining it back to a string
*/

let str7 = "hello";
let reversedStr = str.split("").reverse().join(""); // olleh

/*
Trimming a String
    - .trim(): removes whitespace from both ends of a string
    - .trimStart(): removes whitespace from the start
    - .trimEnd(): removes whitespace from the end
*/

let str8 = "hello world    ";
let trimmed = str8.trim(); // hello world

/*
Converting the Case
    - .toLowerCase(): converts all characters to lowercase
    - .toUpperCase(): converts all character to uppercase
*/

let str9 = "Hello World";
let lower = str9.toLowerCase(); // hello world
let upper = str9.toUpperCase(); // HELLO WORLD