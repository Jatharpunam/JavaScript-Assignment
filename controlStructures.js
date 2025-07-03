const prompt = require(`prompt-sync`)();

//for loop 

// Synax :
// for (initialization; condition; increment/decrement) {
//     code execute in each iteration
// }

//example
for (j = 1; j <= 5; j++) {
    console.log("ans:", j);
}

//while loop

// Syntax :
// while (condition) {
//     //code execute while the condition true
// }

//example
j = 1;
while (j <= 3) {
    console.log("result:", j);
    j++;
}

//do...while 

// Syntax:
// do {
//     code execute
// }
// while (condition);

//example

value = 5;
do {
    console.log("Number:", value);
    value--;
} while (value > 0);

// Exercise-1: Number Checker - Conditional statement

let n3 = Number(prompt("Enter a number:"));

if (n3 > 0) {
    console.log("The number is positive.");
} else if (n3 < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


//Exercise-2 : Multiplication Table - For loop

let number = Number(prompt("Enter Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + (number * i));
}

//Exercise-4: Number Guessing Game
let generateNumber = Math.floor(Math.random() * 10) +1;
let guess = 0;

while (guess !== generateNumber) {
    guess = parseInt(prompt("Guess the Number :"));

    if (guess < generateNumber) {
        console.log("Too low! Try again.");
    }else if (guess > generateNumber) {
        console.log("Too high! Try again.");
    }else if (guess === generateNumber) {
        console.log("🎉 Correct! You guessed the number.");
    }else {
        console.log("Please enter a valid number.");
    }
}

//Exercise-4: Print Even Number - for loop

for (j = 2; j <= 20; j += 2) {
    console.log(j);
}

// or

let result = "Even numbers: ";

for (let i = 2; i <= 20; i += 2) {
    result += i + " ";
}

console.log(result);


//Exercise-5: Sum of Digits - do...while loop

let num = Number(prompt("Enter a Number:"));
let sum = 0;

if (num < 0) {
    num = num * -1;
} do {
    let digit = num % 10;
    sum = sum + digit;
    num = (num / 10);
    num = num - (num % 1);
} while (num > 0)

console.log("Sum of digits: " + sum);


//Exercise-6: FizzBuzz Problem

//using loop and conditional statement
for (j = 1; j <= 50; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");
    } else if (j % 3 === 0) {
        console.log("Fizz");
    } else if (j % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(j);
    }
}

//using loop

for (let i = 1; i <= 50; i++) {
    let output = "";
    output += (i % 3 === 0) ? "Fizz" : "";
    output += (i % 5 === 0) ? "Buzz" : "";
    console.log(output || i);
}


//Exercise-7: Prime Number Ckecker - for loop

n1 = Number(prompt("Enter a number:"));
isPrime = true;

if (n1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n1; i++) {
        if (n1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(n1 + " is a prime number.");
} else {
    console.log(n1 + " is not a prime number.");
}


//Exercise-8: Star Pattern - nested for loops

for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

//Exercise-9: Find the Largest three numbers

//using loop
let input = prompt("Enter three numbers:");
let numbers = input.split(" ");

let largest = Number(numbers[0]);
for (let i = 1; i < numbers.length; i++) {
    let num = Number(numbers[i]);
    if (num > largest) {
        largest = num;
    }
}

console.log("The largest number is: " + largest);

//using Conditional statement

let userInput = prompt("Enter three numbers:");
let numArray = userInput.split(" ");

let a = Number(numArray[0]);
let b = Number(numArray[1]);
let c = Number(numArray[2]);

let maxNumber;

if (a >= b && a >= c) {
    maxNumber = a;
} else if (b >= a && b >= c) {
    maxNumber = b;
} else {
    maxNumber = c;
}

console.log("The largest number is: " + maxNumber);

//Exercise-10: Palindrome Checker
let string = prompt("Enter a String:");
let reverse = "";

for (let i = string.length-1;i>=0;i--) {
    reverse += string[i];
}

if (string === reverse) {
    console.log(string + " is a palindrome.");
} else {
    console.log(string + " is not a palindrome.");
}

//Exercise-11: Count Vowels and Consonants
let str = prompt("Enter a string:").toLowerCase();
let vowels = "aeiou";
let vCount = 0;
let cCount = 0;

for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (vowels.includes(c)) {
        vCount++;
    } else if (c >= 'a' && c <= 'z') {
        cCount++;
    }
}

console.log("Vowels: " + vCount);
console.log("Consonants: " + cCount);




//Exercise-12: Reverse a Number - While loop

let num1 = parseInt(prompt("Enter a number:"));
let reversed = 0;

while (num1 > 0) {
    let digit = num1 % 10;
    reversed = reversed * 10 + digit;
    num1 = parseInt(num1 / 10);
}

console.log("Reversed number:", reversed);


//Exercise-13: Sum of Odd and Even Numbers

//using for loop and conditional statement
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);

//using only for loop 

let Even = 0;
let Odd = 0;

for (let i = 1, j = 2; i <= 99 && j <= 100; i += 2, j += 2) {
    Odd += i;
    Even += j;
}

console.log("Sum of even numbers: " + Even);
console.log("Sum of odd numbers: " + Odd);

//using conditional statement 

let sumE = 0;
let sumO = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumE += i;
    } else {
        sumO += i;
    }
}

console.log("Sum of even numbers: " + sumE);
console.log("Sum of odd numbers: " + sumO);

// Exercise 14: Factorial Using while Loop

let number1 = parseInt(prompt("Enter a number: "));

let factorial = 1;
let i = 1;

while (i <= number1) {
    factorial *= i;
    i++;
}

console.log("Factorial of " + number1 + ": " + factorial);

//Exercise-15: Average of N numbers - For loop

let N = parseInt(prompt("How many numbers?"));
let addnum = 0;

for (let i = 1; i <= N; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));
    addnum += num;
}

let average = addnum / N;

console.log("Sum: " + addnum);
console.log("Average: " + average);

//Exercise-16: Leap Year Checker

let year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//Exercise-17: Find Divisors of a number

//using for loop and Conditional Statement

let num3 = parseInt(prompt("Enter a number:"));
console.log("Divisors of " + num3 + " are:");

for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0) {
        console.log(i);
    }
}

//using the for loop 

let num4 = parseInt(prompt("Enter a number:"));
console.log("Divisors of " + num4 + " are:");

for (let i = 1; i <= num4; i++) {
    (num4 % i === 0) && console.log(i);
}

// # Exercise 18: Fabonacci Sequence
let n2 = parseInt(prompt("How many terms?"));
let x = 0, y = 1;
let res = "";

if (n2 >= 1) res += x;
if (n2 >= 2) res += ", " + y;

for (let i = 3; i <= n2; i++) {
    let c = x + y;
    res += ", " + c;
    x = y;
    y = c;
}

console.log("\nFibonacci sequence:" + res);


// # Exercise 19: Armstrong Number Checker

let n = parseInt(prompt("Enter a number:"));
let original = n;

let count = 0;
let temp = n;

while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}

temp = n;
let s = 0;
while (temp > 0) {
    let digit = temp % 10;
    s += digit ** count;
    temp = Math.floor(temp / 10);
}

if (s === original) {
    console.log(original + " is an Armstrong number.");
} else {
    console.log(original + " is not an Armstrong number.");
}

// # Exercise 20: Number Pyramid
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = '';

    for (let s = 1; s <= rows - i; s++) {
        str += ' ';
    }

    for (let j = 1; j <= i; j++) {
        str += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        str += j;
    }

    console.log(str);
}

