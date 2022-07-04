
const button = document.querySelector("#onclick");

function print(inp){
    document.querySelector("#pad").innerHTML = inp;
}

button.addEventListener("click", print("clicked"));