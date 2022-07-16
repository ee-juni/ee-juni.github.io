function getAllParaElems() {
    var allParas = document.getElementsByTagName("p");
    var num = allParas.length;
    alert("전체 메뉴 종류는 " + num + " 개 입니다.");
  }
  
  function div1ParaElems() {
    var div1 = document.getElementById("coldbrew");
    var div1Paras = div1.getElementsByTagName("p");
    var num = div1Paras.length;
    alert("커피 음료 종류는 " + num + " 개 입니다.");
  }
  
  function div2ParaElems() {
    var div2 = document.getElementById("espresso");
    var div2Paras = div2.getElementsByTagName("p");
    var num = div2Paras.length;
    alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
  }