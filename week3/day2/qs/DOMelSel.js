// HTML <img> 요소를 선택하도록 코드를 작성하세요.
var imgs = document.getElementsByTagName("img");

// HTML <div> 요소를 선택하도록 코드를 작성하세요.
var selectedTagName = document.getElementsByTagName("div");

// 아이디가 “gtomato"인 요소를 선택하도록 코드를 작성하세요.
var selectedId = document.getElementById("gtomato");

// 클래스가 "vegetable"인 모든 요소를 선택하도록 코드를 작성하세요.
var selectedClassNameS = document.getElementsByClassName("vegetable");

// name 속성값이 "tomato"인 모든 요소를 선택하도록 코드를 작성하세요.
var selectedNameS = document.getElementsByName("tomato");

// 선택된 요소들을 출력합니다. 출력 순서를 변경하면 오답 처리가 됩니다.
document.write(imgs + "<br>");
document.write(imgs[0] + "<br>");
document.write(selectedTagName + "<br>");
document.write(selectedId + "<br>");
document.write(selectedClassNameS + "<br>");
document.write(selectedNameS[0] + "<br>");

document.write(selectedTagName[1].textContent + "<br>");
document.write(selectedId.textContent + "<br>");
document.write(selectedClassNameS[2].textContent + "<br>");
document.write(selectedNameS[0].textContent + "<br>");
