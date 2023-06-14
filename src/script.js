
//Target the form section
var inputField = document.getElementById("result-field");

//Target the input field
var displayValue = document.getElementById("result");

//Target the numeric buttons
var numericButtons = document.querySelectorAll(".num");

//Target the operator buttons
var operationButtons = document.querySelectorAll(".op");


var num1;
var num2 = 0;
var op = null;

//Event listener for Numeric button to display thr numbers
numericButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var keyValue = e.target.value;

    if (op) {
      // If an operator is already selected, update num2
      num2 = parseFloat(num2.toString() + keyValue);
    } else {
      // If no operator is selected, update num1
      num1 = parseFloat( num1.toString() + keyValue);
    }
      // populateResultField(keyValue);
      displayValue.value += keyValue;

  });
});


//Event listener for Operation button
operationButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var keyValue = e.target.value;

    if(op === "="){
      displayValue.value = operate(num1,op,num2);
      num1 = parseFloat(displayValue.value);
      num2 = 0; // Reset num2
      op = null;
    }else if (op === "DEL") {
      deleteLastCharacter();

    }else {
      op = keyValue;
      displayValue.value += keyValue;
  }

  });
});
// Function to reset the calculator
function resetCalculator() {
  displayValue.value = "";
  num1 = 0;
  num2 = 0;
  op = null;
}
// Function to delete the last character
function deleteLastCharacter() {
  displayNum.value = displayNum.value.slice(0, -1);
}

//function to populate the input field
function populateResultField(num) {
displayValue.value += num;
}


//Function for reset button
function myFunction() {
  inputField.reset();
};




//Function to do arithmetic  operation
function operate(n1,op,n2) {

let result = 0;
  if (op === "+") {
    result = addition(n1, n2);

  } else if (op === "-") {
      result = subtraction(n1, n2);

  } else if (op === "*") {
     result = multiplication(n1, n2);

  } else if (op === "/") {
    result = division(n1, n2);
  }

  return result;
  }


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
