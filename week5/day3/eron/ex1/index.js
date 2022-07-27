// //Warm Up!

// const fs = require('node:fs')
// const content1 = fs.readFileSync(path='readme.txt')
// const content2 = fs.readFileSync(path='readme.txt', options={encoding:'utf8'})

// console.log(content1)
// console.log(content2)

// fs.readFile('readme.txt',{encoding:'utf8'},(err,data)=>{
//     if(err){
//         return new Error('File loading error occured.')
//     }
//     console.log(data)
// })


// // Promise
// const fs = require('node:fs').promises
// fs.readFile('readme.txt',{encoding: 'utf8'})
//     .then((data)=>{
//         console.log('Resolved!')
//             console.log(data)
//         }
//     ).catch((err)=>{console.log('Error occured')})

// Path
const path = require('node:path')
const fileName = __filename
const fileInfo = {
    sep: path.sep,
    basename: path.basename(fileName),
    delimiter: path.delimiter,
    ext: path.extname(fileName),
    dir: path.dirname(fileName),
    paths: path.parse(fileName),
    normal_path: path.normalize(fileName),
    absolute: path.isAbsolute(fileName),
    relative: path.relative('/', process.cwd())
};
console.log(fileInfo)

const newFileName = path.join('bin', 'www');
console.log('newFileName', typeof(newFileName), newFileName);