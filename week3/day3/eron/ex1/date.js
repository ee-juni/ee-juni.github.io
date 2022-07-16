/*
const now = new Date();
// new 잘 기억! Date 객체 하나 새로 만든다
console.log(now);
console.log(typeof(now));

document.querySelector("h3").innerHTML = now.toLocaleString();

console.log(`Year: ${now.getFullYear()}`);
*/

/*
constructor : 생성자
*/


let user = {
    name : 'juni',
    address: 'seoul'
}
/*
let sum = {
    a:1,
    b:2
}

function calc(a,b){
    // let a = 1;
    // let b = 2;
    return a+b
}

//calc()
calc(1,4)
calc(5,3)
*/

/////////////////////////////////////

function Cal(){
    this.a = 1;
    this.b = 2;
    this.sum = function(){
        return this.a+this.b
    }
}

const c = new Cal();
console.log(c.sum());d

////////////////////////////////////


function Addr(name, address){
    this.name = name,
    this.address = address}

let park = new Addr('park','pusan');
let choi = new Addr('choi','cheonan');

console.log(park);
console.log(choi);


