// 1
taskNameField = document.querySelector("#taskName")
tasksShowUL = document.querySelector("#tasksShow")

taskArray = []

function deleteTask(i) {
    console.log(i)
    taskArray.splice(i, 1)
    displayTasks();
}

function displayTasks() {
    tasksShowUL.innerHTML = taskArray.map((t, index) => `
                                    <li class="liClass">
                                    <span>${t}</span>
                                    <button class='btn btn-danger' onclick='deleteTask(${index})'>Delete</button>
                                    </li>
    `).join('')
}

function addNewTask() {
    newTask = taskNameField.value
    taskArray.push(newTask);
    taskNameField.value = ''
    console.log(taskArray);
    displayTasks()
}



function clearAllTasks() {
    taskArray = [];
    console.log(taskArray);
    displayTasks()
}


// 2

createRowField = document.querySelector('#createRow')

numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function createTables() {
    createRowField.innerHTML = numArray.map((x, i) => `
    <tr>
    <td>${x * 1}</td>
    <td>${x * 2}</td>
    <td>${x * 3}</td>
    <td>${x * 4}</td>
    <td>${x * 5}</td>
    <td>${x * 6}</td>
    <td>${x * 7}</td>
    <td>${x * 8}</td>
    <td>${x * 9}</td>
    <td>${x * 10}</td>
    </tr>

    `).join('')
}
createTables()


// 3

let addmarksField = document.querySelector("#addmarks");
let showField = document.querySelector("#show");
let result = [];

function addmarks() {
    let newMarks = addmarksField.value;
    if (newMarks === "") {
        alert("Please enter marks before adding.");
    }
    result.push(newMarks);
    addmarksField.value = '';
    console.log(result);
    showField.innerText = result.join(" , ");
}

function calculate() {
    if (result.length === 0) {
        alert("No marks to calculate.");
        showField.innerText = "No marks to calculate.";
        return;
    }

    let total = 0;
    let max = min = Number(result[0]);

    result.forEach(x => {
        let num = Number(x);
        total += num;
        if (num > max) max = num;
        if (num < min) min = num;
    });

    let sum = result.join(" + ");
    let avg = total / result.length;

    showField.innerText =
        "Total Marks = " + sum + " = " + total +
        "\nAverage Marks = " + avg +
        "\nHighest Marks = " + max +
        "\nLowest Marks = " + min;
}

function resetMarks() {
    if (result.length === 0) {
        alert("Nothing to reset.");
    }
    result = [];
    addmarksField.value = '';
    showField.innerHTML = '';
    alert("All marks have been reset.");
}


// 4

function searchBtn() {
    value = document.querySelector("#searchvalue").value.trim().toLowerCase();

    names = ["alice", "bob", "charlie", "david"];

    search.value = '';

    if (names.includes(value)) {
        document.querySelector("#search").innerText = `"${value}"`;
    } else {
        document.querySelector("#search").innerText = `No matches found.`;
    }
}

function reset() {
    document.querySelector("#searchvalue").value = '';
    document.querySelector("#search").innerText = '';
}




// 5
filternumField = document.querySelector("#filternum");
outputField = document.querySelector("#output");

numbers = [];

function addNum() {
    num = Number(filternumField.value);
    numbers.push(num);
    filternumField.value = "";
    outputField.innerHTML = "Numbers: " + numbers.join(" , ");
}

function showEven() {
    even = numbers.filter(n => n % 2 === 0);
    outputField.innerHTML = "Even Numbers: " + even.join(" , ");
}

function showOdd() {
    odd = numbers.filter(n => n % 2 !== 0);
    outputField.innerHTML = "Odd Numbers: " + odd.join(" , ");
}

function clearAll() {
    numbers = [];
    filternumField.value = "";
    outputField.innerHTML = "";
}

// 6
sortingField = document.querySelector("#sorting")
sortNamesFiled = document.querySelector("#sortNames")

names = [];

function addName() {
    sortName = sortingField.value;
    names.push(sortName);
    sortingField.value = "";
    sortNamesFiled.innerHTML = "Names:" + names.join(" , ");
}

function sortNames() {
    sorted = names.sort();
    sortNamesFiled.innerHTML = "UnSorted Names: " + names.join(" , ") +
        "<br> Sorted Names: " + names.join(" , ");
}

function resetNames() {
    names = [];
    sortingField.value = "";
    sortNamesFiled.innerHTML = "";
}