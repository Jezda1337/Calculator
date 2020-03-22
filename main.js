//buttons
let btn1 = document.getElementById("addition");
let btn2 = document.getElementById("subtraction");
let btn3 = document.getElementById("divide");
let btn4 = document.getElementById("multiply");

//event listeners for buttons
btn1.addEventListener("click", addition);
btn2.addEventListener("click", subtraction);
btn3.addEventListener("click", divide);
btn4.addEventListener("click", multiply);

//addition
function addition() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  let result = document.getElementById("result");
  result.innerHTML = "Result is: " + (+x + +y);
  // alert(+x + +y);
}
//subtraction
function subtraction() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  let result = document.getElementById("result");
  result.innerHTML = "Result is: " + (x - y);
  // alert(x - y);
}
//divide
function divide() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  let result = document.getElementById("result");
  result.innerHTML = "Result is: " + x / y;
  // alert(x / y);
}
//multiply
function multiply() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  let result = document.getElementById("result");
  result.innerHTML = "Result is: " + x * y;
  // alert(x * y);
}
