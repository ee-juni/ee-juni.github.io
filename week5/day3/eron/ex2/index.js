const url = require('node:url')

//방법1
const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h')
console.log(myURL)
console.log(myURL.origin)

//방법2
const mu2 = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h')
console.log(mu2)