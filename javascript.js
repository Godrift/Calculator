const add = function (a, b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const multiply = function (a,b) {
    return a * b;
};

const divide = function (a,b) {
    return a/b
};

const buttonList = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const operators = ["/", "+", "-", "*"];
let first = 0;
let second = 0;

const updateFirst = function (num) {
    first += num;
};

const buttonClick = function(e) {
    if (display.textContent == "0") {
        display.textContent = ""
    };

    display.textContent += e.target.value;
    if (numbers.includes(e.target.value)) {
        updateFirst(e.target.value);
    }
};

const clearContent = function() {
    display.textContent = "0";
}

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", buttonClick);
}
