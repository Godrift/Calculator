const add = function (a, b) {
    return parseFloat(a) + parseFloat(b);
};

const subtract = function (a,b) {
    return a - b;
};

const multiply = function (a,b) {
    return a * b;
};

const divide = function (a,b) {
    if (b==0){
        return "ERROR"
    };
    return a/b;
};

const buttonList = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["/", "+", "-", "*"];
let first = 0;
let second = 0;
let operator = "";
let result = 0;
let input = 0;

const updateFirst = function (num) {
    first += num;
    first = limit(first);
};

const updateSecond = function (num) {
    second += num;
    second = limit(second);
};

const limit = function (number) {
    const numString = number.toString();
    if (numString.length > 9) {
      return Number(numString.slice(0, 9));
    }
    return number;
  }

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

    if (result =="ERROR") {
        display.textContent = "ERROR";
        input = 0;
        first = 0;
        second = 0;
        operator = "";
        result = 0;
        
    } else {
        result = limit(result);
        first = result;
        second = 0;
        operator=""
        console.log(result);
        display.textContent = result;
    }
    

};

const clear = function () {
    input = 0;
    first = 0;
    second = 0;
    operator = "";
    result = 0;
    display.textContent = 0;
}

const buttonClick = function(e) {
    if (display.textContent == "0" || display.textContent == "ERROR") {
        display.textContent = ""
    };

    if (numbers.includes(e.target.value)) {
        if (operator==""){  
            updateFirst(e.target.value);
            display.textContent = parseFloat(first);
        } else {
            updateSecond(e.target.value);
            display.textContent = parseFloat(second);
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
    } else if (e.target.value == "sign") {
        if (operator==""){  
            first = 0 - first;
            display.textContent = parseFloat(first);
        } else {
            second = 0 - second;
            display.textContent = parseFloat(second);
        };
    } else if (e.target.value == "%") {
        if (operator==""){  
            first = first / 100;
            display.textContent = parseFloat(first);
        } else {
            second = second / 100;
            display.textContent = parseFloat(second);
        };
    };
};

const clearContent = function() {
    display.textContent = "0";
}

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", buttonClick);
}
