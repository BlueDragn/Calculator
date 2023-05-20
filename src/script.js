var inputField = document.getElementById("result-field");
var displayNum = document.getElementById("result");

// var num = document.getElementById("7").value;
// console.log(num);
// // num.addEventListener("click", keyLog);

//  function keyLog(){
// displayNum.value = num;
//  }
var keyLog = document.querySelectorAll(".num");


// keyLog.addEventListener("click", function(e){
//     var  m = e.target.value;
//     displayNum.value = m;
// });

keyLog.forEach(function (num) {
    num.addEventListener("click", function (e) {
      var m = e.target.value;
      displayNum.value = m;
    });
  });




function myFunction() {
    inputField.reset();
  };