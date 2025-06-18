//Pattern Assignment

n = 5;

// Task 1 : Print a Square of Asterisks

console.log("Square of Asterisks")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n; j++) {
        line += ' *';
    }
    console.log(line);
}


// Task 2 : Print a Right-Angled Triangle

console.log("Right - Angled Triangle")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= i; j++) {
        line += ' *';
    }
    console.log(line);
}

// Task 3 : Print a Inverted Right-Angled Triangle

console.log("Inverted Right-Angled Triangle")
for (i = n; i >= 1; i--) {
    line = ' ';
    for (j = 1; j <= i; j++) {
        line += ' *';
    }
    console.log(line);
}

// Task 4 : Print a Pyramid

console.log("Pyramid")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += ' *';
    }
    console.log(line);

}


// Task 5 : Print a Diamond

console.log("Diamond")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += ' *';
    }
    console.log(line);

}
for ( i = n - 1; i >= 1; i--) {
     line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += ' *';
    }
    console.log(line);
}

// Task 6 : Number Pyramid

n = 4

// 1
console.log("Number Pyramid - 1")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += k + ' ';
    }
    console.log(line);

}

// 2

console.log("Number Pyramid - 2")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += i + ' ';
    }
    console.log(line);

}

// 3
console.log("Number Pyramid - 3")
for (i = 1; i <= n; i++) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= 2* i-1; k++) {
        line += i;
    }
    console.log(line);

}

// Task 7 : Pascal's Triangle

n = 5


// Task 8 : Hollow Square

n = 5

for (i = 1; i <= n; i++) {
    line = "";

    for (j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            line += "* ";
        } else {
            line += "  "; 
        }
    }

    console.log(line);
}

// Task 9 : Hourglass Pattern

n = 4

console.log("Hourglass Pattern")
for (i = n; i >= 1; i--) {
    line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += ' *';
    }
    console.log(line);

}
for ( i = 2; i <= n; i++) {
     line = ' ';
    for (j = 1; j <= n - i; j++) {
        line += ' ';
    } for (k = 1; k <= i; k++) {
        line += ' *';
    }
    console.log(line);
}

// Task 10 : Zig-Zag Pattern

n = 5