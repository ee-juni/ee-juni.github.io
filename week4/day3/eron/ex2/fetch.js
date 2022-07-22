// fetch.js

const getBtn = document.querySelector('#get-btn')
const postBtn = document.querySelector('#post-btn')

//하나의 함수로 두가지 기능을 할수 있게끔!
const sendHTTPRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type':'application/json'}:{}
    }).then(resp=>{
        if (resp.status>=400){
            return resp.json().then(err=>{
                const error = new Error('Network error')
                error.data = err
                throw error
            })
        }
        return resp.json()
    })
}

const getData = ()=>{
    sendHTTPRequest('GET','https://reqres.in/api/users')
        .then(result=>{
            console.log(result)
        })
}


const sendData = ()=>{
    sendHTTPRequest('POST','https://reqres.in/api/register',{
        'email':'eve.holt@reqres.in',
        'password':"pistol"
    }).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
}

getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',sendData)