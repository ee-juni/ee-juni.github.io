const request = new XMLHttpRequest()


request.addEventListener('readystatechange',()=>{
    console.log(request, request.readyState)  

                                      // 정상적 수행 완료 
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    } else if (request.readyState === 4){
        console.log('요청하신 내용을 찾을 수 없음')
    }
})


request.open('GET','https://jsonplaceholder.typicode.com/todos')
request.send()


// 통신... 각 컴퓨터의 port. 일종의 통신을 하기 위한 콘센트 같은 느낌
// http 통신 규약에 의한 통신 방법 4ㄱㅏ지
/* 
get => read 읽는다
post => create => 글을 새로 쓰기, 회원 가입 하기, 서버쪽에 client가 정보를 전달하는 방식
put => update. 논란의 여지가 있음... 보안 문제
delete => 만들고 읽고 업데이트하고 지운다 ==> CRUD
*/

