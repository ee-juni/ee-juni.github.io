const os = require('os')
console.log(os.cpus().length)

const process= require('node:process')

console.log(process.release)

// 왼쪽 거 undefined 안 돼 있으면 오른쪽 거 사용해라
console.log(process.env.PORT || 3000)

// 암호 같은 거는 env를 통해 가져와

console.log(process.env.SECRET_KEY)


