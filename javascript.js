const add = function (a, b) {
    return parseInt(a) + parseInt(b);
};

const subtract = function (a,b) {
    return a - b;
};

const multiply = function (a,b) {
    return a * b;
};

const divide = function (a,b) {
    if (b==0){
        display.textContent = "ERROR";
    };
    return a/b;
};

const buttonList = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const operators = ["/", "+", "-", "*"];
let first = 0;
let second = 0;
let operator = "";
let result = 0;

const updateFirst = function (num) {
    first += num;
};

const updateSecond = function (num) {
    second += num;
};

const produceResult = function () {
    switch (operator) {
        case "/":
            result = divide(first, second);
            break;
        case "*":
            result = multiply(first, second);
            break;
        case "+":
            result = add(first, second);
            break;
        case "-":
            result = subtract(first, second);
    };
    
    first = result;
    second = 0;
    operator=""
    console.log(result);
    display.textContent = result;
};

const clear = function () {
    first = 0;
    second = 0;
    operator = "";
    display.textContent = "0"
}

const buttonClick = function(e) {
    if (display.textContent == "0") {
        display.textContent = ""
    };

    if (numbers.includes(e.target.value)) {
        if (operator==""){     
            display.textContent += e.target.value;
            updateFirst(e.target.value);
        } else {
            updateSecond(e.target.value);
            display.textContent = parseInt(second);
        }
    } else if (operators.includes(e.target.value)) {
        if (operator=="") {
            operator = e.target.value;
        } else {
            produceResult();
            operator = e.target.value;
        }
    } else if (e.target.value=="=") { 
        produceResult();
    } else if (e.target.value=="AC") {
        clear();
    };
};

const clearContent = function() {
    display.textContent = "0";
}

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", buttonClick);
}
