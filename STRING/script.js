const inputString = document.querySelector('#inputPara')
const result1 = document.querySelector("#result")


function Vowels() {
    const allVowels = 'aeiouAEIOU'
    let count = 0;
    inputSTR = inputString.value

    for (let i = 0; i < inputSTR.length; i++) {

        if (allVowels.includes(inputSTR[i])) {
            count++
        }
    }
    result1.textContent = count
}


function checkPalindrome() {
    const inputString = document.querySelector('#inputPara').value.trim();
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }
    const result1 = document.querySelector('#result');
    if (inputString === reversed) {
        result1.innerHTML = `${inputString} - ${inputString}`;
    } else {
        result1.innerHTML = `${inputString} - Not a Palindrome`;
    }
}

function ExtractWord() {
    inputSTR = inputString.value
    inputArray = inputSTR.split(" ")
    result1.textContent = inputArray[0];
}


function countCharacters() {
    inputSTR = inputString.value
    console.log(inputSTR.length)
    result1.textContent = inputSTR.length;
    result1.style.fontSize = '30px';
}


function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}


function countWords() {
    inputSTR = inputString.value
    const wordsCount = inputSTR.split(' ').length
    result1.textContent = wordsCount
}


function replacewithhyphen() {
    inputSTR = inputString.value;
    result1.textContent = inputSTR.replaceAll(" ", "-");
}

function splitIntoWords() {
    // inputSTR = inputString.value;
    // inputArray = inputSTR.split(" ");
    // result1.textContent = JSON.stringify(inputArray);
    result1.textContent = `["${inputString.value.split(" ").join(", ")}"]`;
}

function capitalizeWords() {
    inputSTR = inputString.value;
    inputArray = inputSTR.split(" ");
    outputSTR = "";
    for (i = 0; i < inputArray.length; i++) {
        word = inputArray[i];
        outputSTR += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    result1.textContent = outputSTR;
}


function reverseString() {
    inputSTR = inputString.value;
    reverseSTR = ""
    for (i = inputSTR.length - 1; i >= 0; i--) {
        reverseSTR += inputSTR[i]
    }
    result1.textContent = reverseSTR;
}

function countOccurrences() {
    inputSTR = inputString.value;
    input = prompt("Enter a Character");
    count = 0;
    for (i = 0; i < inputSTR.length; i++) {
        if (inputSTR[i] === input)
            count++
    }
    result1.textContent = count;
}

function removeNonAlphanumeric() {
    inputSTR = inputString.value;
    result = inputSTR.replace(/[^a-zA-Z0-9 ]/g, "");
    result1.textContent = result
}

function startsAndEndSame() {
    inputSTR = inputString.value;
    let firstChar = inputSTR[0]
    let lastChar = inputSTR[inputSTR.length - 1]
    if (firstChar === lastChar) {
        result1.textContent = "Yes, String starts and ends with same Character";
    } else {
        result1.textContent = "No, String starts and ends with same Character";
    }
    // result1.textContent = inputSTR[0] === inputSTR[inputSTR.length - 1] ? "Yes" : "No";
}






