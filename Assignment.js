const prompt = require(`prompt-sync`)();

// *****Examples ****

// Arithmetic Operations
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Sub:", num1 - num2);
console.log("Mul:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exp:", num1 ** num2);
console.log("Increment:", num1++);
console.log("Increment:", num2++);
console.log("Decrement:", num1--);
console.log("Decrement:", num2--);


// Comparison Operators

let a = 10;
let b = 20;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a === b);
console.log(a !== b);
console.log(a != b);

// Combine Logical Operators
let isBig = true;
let isSmall = false;

console.log(isBig && isSmall);
console.log(isSmall && isBig);
console.log(isBig || isSmall);
console.log(isSmall || isBig);
console.log(!isBig);
console.log(!isSmall);

// Demonstrate Operator Precedence - BODMAS
let ans = 29 + 2 * 7 - 4 / 5;
console.log(ans);


// Assignment Operator
let x = 27;

x += 3;    //x = x + 3
console.log(x);

x *= 7 //x = x * 7
console.log(x);

x -= 5 //x = x - 5
console.log(x);

x /= 8 //x = x /8
console.log(x);

x %= 5 //x = x % 5
console.log



// ****Assignments: Operators and Expressions in JavaScript****

// Assignment-1: Arithmetic Operations
let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));

console.log('Addition n1 + n2:', n1 + n2);
console.log('Sub n1 - n2:', n1 - n2);
console.log('Mul n1 * n2:', n1 * n2);
console.log('Division n1 / n2:', n1 / n2);
console.log('Modulus n1 % n2:', n1 % n2);

//Assignment-2: Comparison Operators
let c = Number(prompt("Enter first number:"));
let d = Number(prompt("Enter second number:"));


p = (c >= d);
console.log('Is first number greater than second?', p);

p = (c <= d);
console.log('Is first number is less than the second?', p);

p = (c === d);
console.log('Are the two numbers equal?', p);

// or
console.log('Is first number greater than second?', c > d);

console.log('Is first number is less than the second?', c < d);

console.log('Are the two numbers equal?', c === d);


// or
if (c > d) {
    console.log('Is first number greater than second?', c > d)
}
else if (c < d) {
    console.log('Is first number is less than the second?', c < d)
}
else {
    console.log('Are the two numbers equal?', c === d)
}

// or
if (c > d) {
    console.log('First number is greater than second:', c > d);
} else if (c < d) {
    console.log('First number is less than second:', c < d);
} else {
    console.log('Both numbers are equal:', c === d);
}

console.log('Is first number greater than second?', c > d);
console.log('Is first number less than the second?', c < d);
console.log('Are the two numbers equal?', c === d);


// Assignment-3: Logical Operators
let mathsScore = prompt('Enter Math Score:');
let scienceScore = prompt('Enter Science Score:');

isEligible = (mathsScore >= 90 && scienceScore >= 85);

console.log('Scholaship Eligibility:', isEligible);

// Assignment-4: Assignment Operators
let y = 10;
console.log("Initial value of y:", y)

// 1
x += 5;
console.log('After adding 5:', x)

// 2
y *= 3;
console.log('After Multiplying by 3:', y)

// 3
y -= 10;
console.log('After substracting 10:', y)

// 4
y /= 2;
console.log('After dividing by 2:', y)

// 5
y %= 3;
console.log('Modulus with 3:', y)


// Assignment-5: Operator Precedence

// 1
let result1 = 10 + 3 * 5;
let result2 = (10 + 3) * 5;
let result3 = 20 / 2 + 3;
let result4 = 20 / (2 + 3);


console.log("10 + 3 * 5=", result1);
console.log("(10 + 3) * 5=", result2);
console.log("20 / 2 + 3=", result3);
console.log("20 / (2 + 3)=", result4);

// Assignment-6: Combined Example
 
let lenght = parseFloat(prompt("Enter lenght:"));
let width = parseFloat(prompt("Enter width:"));

let perimeter = 2 * (lenght + width);
let area = lenght * width;

console.log("Perimeter:", perimeter);

console.log("Area:", area);

console.log("Is perimeter greater than area?", perimeter > area);


// Assignment-7: Complex Logical and Comparison Operations

let age = parseInt(prompt("Enter age :"));
let isCitizen = prompt("Are you a citizen (true/false)?") === "true";

let eligibility = (age>=18) && isCitizen;
console.log("Eligible to vote:", eligibility);


// Assignment-8: BMI Calculator

let weight = parseFloat(prompt("Enter weight (kg):"));
let height = parseFloat(prompt("Enter height (m):"));

let bmi = weight / (height * height);
console.log("BMI:", bmi);

if (bmi < 18.5){
    console.log("Category: Underweight");
}else if (18.5 <= bmi < 24.9) {
    console.log("Category: Normal weight");
}else if (25 <= bmi < 29.9) {
    console.log("Category: Overweight");
}else {
    console.log("Category: Obesity");
}


// Assignment-9: Even or Odd

let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log("The number is even");
}else {
    console.log("The number is odd");
}


//Assignment 10: Shopping Discount

let amt = parseFloat(prompt("Enter total amount:"));

if (amt > 100) {
    amt -= amt *0.1; // 10% discount
}

console.log("Discounted total:", amt);