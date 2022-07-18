const getJson = (resource, callback) => {

    return new Promise((resolve,reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
    
            } else if (request.readyState === 4) {
                reject('failed');
            }
        });
    
        request.open('GET', resource);
        request.send(); // 2  // 위에게 준비됬으니, 서버로 전송을 하겠다!!
    })

}

// Promise
getJson('jsondata/pikachu.json')
    .then(result => {
        console.log('promise 1: '+result);
        return getJson('jsondata/musclemon.json')
    }).then(result=>{
        console.log('promise 2: '+result);
        return getJson('jsondata/jamanbo.json')
    }).then(result =>{
        console.log('promise 3: '+result)
    }).catch(err => {
        console.log('rejected ' + err)
    })

