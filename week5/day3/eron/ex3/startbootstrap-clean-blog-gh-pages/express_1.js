const express = require('express') // function

const app = express();
/*
console.log(express)
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send('hello, world')
})
*/
app.use(express.static(root='public')) //middleware
app.listen(4000,()=>{console.log('Server is running!')});