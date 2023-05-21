var inputField = document.getElementById("result-field");
var displayNum = document.getElementById("result");
var numericButtons = document.querySelectorAll(".num");
var operationButtons = document.querySelectorAll(".op");


var num1 = 0;// Variable to store the first number input

//event listener for Numeric button
numericButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var keyValue = e.target.value;
    populateResultField(keyValue);

  });
});

//event listener for Operation button
operationButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    keyValue = e.target.value;
    var op = keyValue;
    num1 = Number(displayNum.value); // Store the current display value as num1
    // displayNum.value = ""; // Clear the display for the next input

  });
});

//function to populate the input field
function populateResultField(num) {
  displayNum.value += num;
}


//Function for reset button
function myFunction() {
  inputField.reset();
};


/**
 *Operations functions below
 */

//Addition
function addition(n1, n2) {
  return n1 + n2;

}

//subtraction
function subtraction(n1, n2) {
  return n1 - n2;
}

//Multiplication
function multiplication(n1, n2) {
  return n1 * n2;
}

//Division
function division(n1, n2) {
  return n1 / n2;
}


//Function to do arithmetic  operation
function operate(num1, op, num2) {
  var result;
  num2 = Number(displayNum.value); // Get the second number from the display
  if (op === "+") {

    return result = addition(num1, num2);

  } else if (op === "-") {
    return result = subtraction(num1, num2);

  } else if (op === "*") {
    return result = multiplication(num1, num2);

  } else if (op === "/") {
    return result = division(num1, num2);

  } else {
    result = 0;
  }
  displayNum.value = result; // Display the result
}