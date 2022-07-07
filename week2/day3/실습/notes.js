let scores = {
    '국어':40,
    '수학':40,
    '영어':70

}

let sum=0;

for (let subject in scores){
    const score = scores[subject];
    sum+=score;
}

let pf = (sum>60) ? 'pass':'fail';  // 조건문 ? 참일 때 값 : 거짓일 때 값

Object.keys(scores)//["kor","mat", "eng"]

// for of: value 대입
// for in: key 대입
// Array.prototype.length: 배열의 요소 개수 반환

// 비트 연산자: a&b => a와 b의 비트값 끝이 같이 1이면 1반환 아니면 0반환 -> a&1=>짝수는 0
