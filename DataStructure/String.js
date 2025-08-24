//🔹 Declaring Strings

let str1 = "Hello"; // Double quotes
let str2 = "World"; // Single quotes
let str3 = `Hello World`; // Template literals (backticks)

//String Properties

let str = "JavaScript";
console.log(str.length); // 10 (length property)
console.log(str[0]); // 'J' (indexing)

//🔹 Common String Methods

let text = "Hello JavaScript";

// Case conversion
console.log(text.toUpperCase()); // "HELLO JAVASCRIPT"
console.log(text.toLowerCase()); // "hello javascript"

// Substring
console.log(text.substring(0, 5)); // "Hello"
console.log(text.slice(6)); // "JavaScript"

// Search
console.log(text.includes("Java")); // true
console.log(text.indexOf("Java")); // 6

// Replace
console.log(text.replace("JavaScript", "World")); // "Hello World"

// Split & Join
let arr = text.split(" ");
console.log(arr); // ["Hello", "JavaScript"]
console.log(arr.join("-")); // "Hello-JavaScript"

// Trim
let extra = "   spaced   ";
console.log(extra.trim()); // "spaced"

// Repeat
console.log("Hi!".repeat(3)); // "Hi!Hi!Hi!"

//🔹 Iterating a String
let strs = "Code";
for (let char of str) {
  console.log(char); // C o d e
}
