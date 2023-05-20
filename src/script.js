

var inputField = document.getElementById("result-field");
var displayNum = document.getElementById("result");

var numericButtons = document.querySelectorAll(".num");

numericButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var num = e.target.value;
    displayNum.value += num;
  });
});




function myFunction() {
    inputField.reset();
  };