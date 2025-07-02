//const let var

arr1 = []

console.log(typeof(arr1));

arr2 = [1,2,3,4]
fruits = ["Banana", "Mango", "Apple"]
student = ["Mr. Bean","1276237887",100,["Pune", "India"]]
Colors = ["Pink", "Black", "Orange"]

console.log(arr2)
console.log(typeof(arr2));
console.log(fruits)
console.log(student)
console.log(Colors)

console.log(arr2[2])
console.log(fruits[2])
console.log(Colors[2])

//add
fruits[3] = 'Cherry'
console.log(fruits)

Colors[3] = 'Red'
console.log(Colors)

//push - add last
fruits.push('Papaya')
console.log(fruits)

Colors.push('White')
console.log(Colors)

//unshift - add first

fruits.unshift('Strawberry')
console.log(fruits)

Colors.unshift('Green')
console.log(Colors)

//pop - delete last 

fruits.pop()
console.log(fruits)

Colors.pop()
console.log(Colors)

//shift - delete first

fruits.shift()
console.log(fruits)

Colors.shift()
console.log(Colors)

//slice - not affect main array
//1st - index , 2nd - length

//fruits

subFruit = fruits.slice(2,3)
console.log(subFruit)

console.log(fruits, "Original fruit array")

//splice
//1st - index , 2nd - number of elements to delete 

fruits.splice(0,0,'Kiwi')
console.log(fruits, "After splice")

//colors 
// slice
arrColors = Colors.slice(2,4)
console.log(arrColors)

//splice

Colors.splice(0,2,'Blue')
console.log(Colors, "After splice")

//using for loop - Fruits

for (i=0 ; i<fruits.length; i++) {
    console.log(fruits[i])
}
    console.log('End of fruits')

for (x of fruits) {
    console.log(x)
}
    console.log('End of for Of - fruits')

for (i in fruits) {
    console.log(i)
}
    console.log('End of for in- fruits')


//using for loop - Colors

for (i=0; i<Colors.length; i++) {
    console.log(Colors[i])
}
    console.log('End of Colors')

for (x of Colors) {
    console.log(x)
}
    console.log('End of for Of - Colors')

for (i in Colors) {
    console.log(i)
}
    console.log('End of for In- Colors')


//includes - true or false -- Fruits

y = fruits.includes('Grapes')
console.log(y)

y = fruits.includes('Kiwi')
console.log(y)

//indexOf -Fruits

indexNum = fruits.indexOf('Cherry')
console.log(indexNum)

//includes - true or false -- Colors

x = Colors.includes('White')
console.log(x)

x = Colors.includes('Red')
console.log(x)

//indexOf - Colors

indexNum = Colors.indexOf('White')
console.log(indexNum)

indexNum = Colors.indexOf('Red')
console.log(indexNum)


//Availability - fruits

indFruit = fruits.indexOf('Apple')
if (indFruit !== -1) {
    console.log("You can Order")
    console.log(indFruit)
}else {
    console.log("Fruit not Available")
}

//Availability - Colors

indColor= Colors.indexOf('Pink')
if (indColor !== -1) {
    console.log("You can Order")
    console.log(indColor)
}else {
    console.log("Color not Available")
}


//Calculate Sum of Array Elements

marks = [75, 78, 85, 90, 99]

total = 0
for (i = 0; i<marks.length; i++) {
    // total = total + marks[i]
    total += marks[i]
}
console.log(total)

highestMarks = 0

for (i = 0; i<marks.length; i++) {
    if (highestMarks < marks[i]) {
        highestMarks = marks[i]
    }
}

console.log(highestMarks)



//MERN

// forEach, map, filter, find, some, findIndex, reduce

student = [1234, 'Punam', 21, 'CSE', 8.9]

//forEach

student.forEach((element,index)=> {
    console.log("Info", element)
})

fruits.forEach((f)=> {
    console.log(f, ": I like this fruit")
})

console.log(marks)
marks.forEach((m)=> {
    console.log(m+5)
})

//map

// 1 - add 5
newMarks = marks.map((x)=> {
    return x+5
})

console.log(newMarks)

// 2 - square 
numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numArray)

sqNumber = numArray.map((number)=> {
    return number * number
})

console.log(sqNumber)

sq1Number = numArray.map((x)=> x * x)
console.log(sq1Number)

// Filter - Even Numbers

evenArray = numArray.filter((z)=> {
    if (z % 2 == 0) {
        return z
    }
})

console.log(evenArray)

//find Index of 78

let index78

for (i = 0; i<marks.length; i++) {
    if (marks[i] == 78) {
        index78 = i
    }
}
console.log("index78 :", index78)


//Assignments 

// 1. Create a program to reverse an array manuaaly.

console.log(numArray)

revArray = []
numArray

l = numArray.length

for (i = l-1; i>=0; i--) {
    revArray.push(numArray[i])
}
console.log(revArray)

// or
function reverseArray(numArray) {
    let revArray = [];
    let l = numArray.length;

    for (let i = l - 1; i >= 0; i--) {
        revArray.push(numArray[i]);
    }

    return revArray;
}
console.log(revArray)

// 2. Find the second-largest number in an array
s = [30,40,50,60]

function secondLargest(s) {
    let largest = -Infinity, second = -Infinity;
    for (let num of s) {
        if (num>largest) {
            second = largest;
            largest = num;
        }else if (num>second && num < largest) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest(s))


// 3. Merge two arrays without duplicates
let p = [1,2,3]
let q = [2,3,4]

function mergewithoutDuplicates(p,q) {
    return [...new Set([...p, ...q])];
}
console.log(mergewithoutDuplicates(p,q));


// 4. Find the frequency of each element in an array
let c = [1,2,2,3,4,4,4,5];

let freq = {}

for (let num of c) {
    freq[num] = (freq[num] || 0) +1;
}
console.log(freq);


// 5. Implement a mutual version of the includes method
let b1 = [1,2,3]
let b2 = [4,5,3]

function mutualincludes(b1,b2) {
    return b1.some(item=>b2.includes(item))
}
console.log(mutualincludes(b1,b2));


// 6. Shift elements in an array to the left by one position
let num = [1,2,3,4,5]
let n1 = num.shift();
num.push(n1);

console.log(num)


// 7. Rotate an array to the right by k steps
let a1 = [1,2,3,4,5]
let k = 7;
function rotateRight(a1,k) {
    k %= a1.length;
    return [...a1.slice(-k), ...a1.slice(0,-k)];
}
console.log(rotateRight(a1,k));


// 8. Remove all duplicate elements in an array
a = [1,2,2,3,4,4,5]
function removeDuplicates(a) {
    return [...new Set(a)];
}
console.log(removeDuplicates(a));


// 9. Create a 2D array representing a multiplication table for numbers 1 to 10
function multiplicationTable() {
    let table = [];
    for (let i=1; i<=10; i++) {
        let row = [];
        for (let j=1; j<=10; j++) {
            row.push(i*j);
        }
        table.push(row);
    }
    return table;
}
console.log(multiplicationTable());


// 10. Find Intersection of two arrays

let a2 = [3,4,5,6,7]

function Intersection(a1, a2) {
    return a1.filter(item=> a2.includes(item));
}
console.log(Intersection(a1,a2));