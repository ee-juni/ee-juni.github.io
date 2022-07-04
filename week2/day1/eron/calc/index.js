function printExpression(value) {
    document.querySelector("#expression").innerHTML += value;
  }
function printExpression2(value) {
    document.querySelector("#expression").innerHTML += " ";
    document.querySelector("#expression").innerHTML += value;
    document.querySelector("#expression").innerHTML += " ";
  }

function calculate(){
    let expression = document.querySelector("#expression").innerHTML;
    document.querySelector("#answer").innerHTML = eval(expression);
}