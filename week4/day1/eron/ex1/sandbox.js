const getJson = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange',()=>{
        console.log(request, request.readyState)  
    
                                          // 정상적 수행 완료 
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);

        } else if (request.readyState === 4){
            callback('요청하신 내용을 찾을 수 없음', undefined)

        }
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos0000')
    request.send()

}




console.log(1)
console.log(2)

getJson((err,result)=>{
    if (err){
        console.log(err)
    } else{
        console.log(result)
    }
})

console.log(3)
console.log(4)
